pipeline {
  agent any
  parameters {
    booleanParam(name: 'Service 1',
      defaultValue: true,
      description: 'Checkbox parameter')
      booleanParam(name: 'Service 2',
      defaultValue: true,
      description: 'Checkbox parameter')
      booleanParam(name: 'Service 3',
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
  }
}
