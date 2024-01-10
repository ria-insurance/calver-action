pipeline {
  agent any
  parameters {
    booleanParam(name: 'Service_1',
      defaultValue: true,
      description: 'Checkbox parameter')
      booleanParam(name: 'Service_2',
      defaultValue: true,
      description: 'Checkbox parameter')
      booleanParam(name: 'Service_3',
      defaultValue: true,
      description: 'Checkbox parameter')
      booleanParam(name: 'Service_4',
      defaultValue: true,
      description: 'Checkbox parameter')
  }
  stages {
    stage('Example') {
      steps {
        echo "Trying: ${params.Service_4}"
      }
    }
    stage('Deploy Service 1') {
      steps {
        script {
          if (params.Service_1){
            echo "Deploying Service 1"
          }
        }
      }
    }
  }
}
