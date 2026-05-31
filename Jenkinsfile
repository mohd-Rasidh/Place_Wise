pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/mohd-Rasidh/Place_Wise.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Place_Wise App...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests for Place_Wise...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Place_Wise...'
            }
        }
    }
}
