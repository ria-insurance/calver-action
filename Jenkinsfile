pipeline {
  agent any
  stages {
    stage('Example') {
      steps {
        echo "Trying: ${params.Service_4}"
      }
    }

    stage('Deploy Service 1') {
      parallel {
        stage('Deploy Service 1') {
          steps {
            script {
              if (params.Service_1){
                echo "Deploying Service 1"
                build job: "Deploy Service"
              }
            }

          }
        }

        stage('Deploy Service 2') {
          steps {
            script {
              if (params.Service_2){
                echo "Deploying Service 2"
                build job: "Deploy Service"
              }
            }

          }
        }

        stage('Deploy Service 3') {
          steps {
            script {
              if (params.Service_3){
                echo "Deploying Service 3"
                build job: "Deploy Service"
              }
            }

          }
        }

        stage('Deploy Service 4') {
          steps {
            script {
              if (params.Service_4){
                echo "Deploying Service 4"
                build job: "Deploy Service"
              }
            }

          }
        }

      }
    }

  }
  parameters {
    booleanParam(name: 'Service_1', defaultValue: true, description: 'Checkbox parameter')
    booleanParam(name: 'Service_2', defaultValue: true, description: 'Checkbox parameter')
    booleanParam(name: 'Service_3', defaultValue: true, description: 'Checkbox parameter')
    booleanParam(name: 'Service_4', defaultValue: true, description: 'Checkbox parameter')
  }
}
