import boxen from 'boxen';
import logSymbols from 'log-symbols';

// Helper function to display a success message with a checkmark icon
function logSuccess(message) {
  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green'
  };
  const successBox = boxen(`${logSymbols.success} ${message}`, boxenOptions);
  console.log(successBox);
}

// Helper function to display an error message with an X icon
function logError(message) {
  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'red'
  };
  const errorBox = boxen(`${logSymbols.error} ${message}`, boxenOptions);
  console.log(errorBox);
}

export { logSuccess, logError };