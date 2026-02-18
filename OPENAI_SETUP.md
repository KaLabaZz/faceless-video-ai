# OpenAI ChatGPT API Token Setup

To set up the OpenAI ChatGPT API, you'll need to acquire an API token and configure it correctly in your environment. Follow the steps below:

## Step 1: Obtain your API Token
1. Go to the [OpenAI website](https://www.openai.com/).
2. Sign up or log in to your account.
3. Navigate to the API section of your account dashboard.
4. Generate a new API key if you haven't done so already.

## Step 2: Environment Variables
To securely configure your API token, you should place it in an environment variable. Here’s how:

### On Windows:
1. Search for `Environment Variables` in your start menu.
2. Click on `Edit the system environment variables`.
3. In the System Properties window, click on the `Environment Variables` button.
4. Under `System variables`, click on `New`.
5. Enter `OPENAI_API_KEY` as the variable name and paste your API token as the value.
6. Click OK to save.

### On macOS or Linux:
1. Open a terminal.
2. Edit your shell configuration file (e.g., `.bashrc`, `.bash_profile`, or `.zshrc`) using a text editor.
3. Add the following line:
   
   ```sh
   export OPENAI_API_KEY='your_api_key_here'
   ```
4. Save the file and close the editor.
5. Run `source ~/.bashrc` (or the appropriate file) to apply the changes.

## Step 3: Verify Your Configuration
You can verify that your API token is correctly set by executing:
```sh
 echo $OPENAI_API_KEY
```
This should display your API token in the terminal. Ensure you never share this token publicly or include it in your code repository.

## Conclusion
That’s it! You are now ready to use the OpenAI ChatGPT API in your applications.