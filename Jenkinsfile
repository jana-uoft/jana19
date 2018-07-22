#!groovy

def errorMessage = "" // Used to check buildStatus during any stage

def isDeploymentBranch(){
  def currentBranch = env.GIT_BRANCH.getAt((env.GIT_BRANCH.indexOf('/')+1..-1))
  return currentBranch==PRODUCTION_BRANCH || currentBranch==DEVELOPMENT_BRANCH;
}

def getSuffix() {
  def currentBranch = env.GIT_BRANCH.getAt((env.GIT_BRANCH.indexOf('/')+1..-1))
  return currentBranch==DEVELOPMENT_BRANCH ? '-dev' : '';
}

pipeline {
  // construct global env variables
  environment {
    SITE_NAME = 'testing' // Name will be used for archive file (with suffix '-dev' if DEVELOPMENT_BRANCH)
    PRODUCTION_BRANCH = 'master' // Source branch used for production
    DEVELOPMENT_BRANCH = 'dev' // Source branch used for development
    SLACK_CHANNEL = '#builds' // Slack channel to send build notifications
  }
  agent any
  stages {
    stage ('Install Packages') {
      steps {
        notifySlack status: 'STARTED', channel: SLACK_CHANNEL
        script {
          try {
            // Install required node packages
            nodejs(nodeJSInstallationName: '10.6.0') {
              sh 'yarn 2>commandResult'
            }
          } catch (e) {
            if (!errorMessage) {
              errorMessage = "Failed while installing node packages.\n\n${readFile('commandResult').trim()}\n\n${e.message}"
            }
            currentBuild.currentResult = 'FAILURE'
          }
        }
      }
    }
    stage ('Test') {
      // Skip stage if an error has occured in previous stages
      when { expression { return !errorMessage; } }
      steps {
        // Test
        script {
          try {
            nodejs(nodeJSInstallationName: '10.6.0') {
              sh 'yarn test 2>commandResult'
            }
          } catch (e) {
            if (!errorMessage) {
              errorMessage = "Failed while testing.\n\n${readFile('commandResult').trim()}\n\n${e.message}"
            }
            currentBuild.currentResult = 'UNSTABLE'
          }
        }
      }
    }
    stage ('Build') {
      // Skip stage if an error has occured in previous stages or if not isDeploymentBranch
      when { expression { return !errorMessage && isDeploymentBranch(); } }
      steps {
        script {
          try {
            // Build
            nodejs(nodeJSInstallationName: '10.6.0') {
              sh 'yarn build 2>commandResult'
            }
          } catch (e) {
            if (!errorMessage) {
              errorMessage = "Failed while building.\n\n${readFile('commandResult').trim()}\n\n${e.message}"
            }
            currentBuild.currentResult = 'UNSTABLE'
          }
        }
      }
    }
    stage ('Upload Archive') {
      // Skip stage if an error has occured in previous stages or if not isDeploymentBranch
      when { expression { return !errorMessage && isDeploymentBranch(); } }
      steps {
        script {
          try {
            // Create archive
            sh 'mkdir -p ./ARCHIVE 2>commandResult'
            sh 'mv node_modules/ ARCHIVE/ 2>commandResult'
            sh 'mv build/* ARCHIVE/ 2>commandResult'
          } catch (e) {
            if (!errorMessage) {
              errorMessage = "Failed while uploading archive.\n\n${readFile('commandResult').trim()}\n\n${e.message}"
            }
            currentBuild.currentResult = 'FAILURE'
          }
        }
      }
    }
    stage ('Deploy') {
      // Skip stage if an error has occured in previous stages or if not isDeploymentBranch
      when { expression { return !errorMessage && isDeploymentBranch(); } }
      steps {
        script {
          try {
            // Deploy app
            sh "rsync -azP --ignore-times ARCHIVE/ root@jana19.org:/var/www/jana19.org/"
          } catch (e) {
            if (!errorMessage) {
              errorMessage = "Failed while deploying.\n\n${readFile('commandResult').trim()}\n\n${e.message}"
            }
            currentBuild.currentResult = 'FAILURE'
          }
        }
      }
    }
  }
  post {
    always {
      notifySlack message: errorMessage, channel: SLACK_CHANNEL
      cleanWs() // Recursively clean workspace
    }
  }
}