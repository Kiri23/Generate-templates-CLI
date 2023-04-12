import ora from 'ora';

// Helper function to display a loading spinner
function showSpinner(message) {
    const spinner = ora(message).start();
    return spinner;
}

export { showSpinner };