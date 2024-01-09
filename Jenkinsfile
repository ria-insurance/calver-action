pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        input(message: 'Enter?', id: 'env', ok: 'E1, E2')
        sleep(unit: 'SECONDS', time: 5)
      }
    }

  }
}