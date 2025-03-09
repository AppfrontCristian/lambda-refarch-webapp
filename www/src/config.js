// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"
// Configuration for connecting to AWS services

const config = {
  // Cognito settings
  aws_user_pools_web_client_id: "nl63ssoctq3pcbf7901sedjtd", // Cognito User Pool Web Client ID
  cognito_hosted_domain: "mytodoappdemo-thetrainingstack.auth.eu-north-1.amazoncognito.com", // Cognito Hosted UI Domain Name
  cognito_id: "eu-north-1_Vy88xQDy9", // Cognito User Pool ID

  // API Gateway URL with stage name placeholder
  api_base_url: "https://ggawl4trv1.execute-api.eu-north-1.amazonaws.com/{StageNameParam}", // API Gateway URL

  // Amplify app URL for redirect after authentication
  redirect_url: "https://master.d1tgwb9esjzq6i.amplifyapp.com", // Amplify app URL for redirect

  // Replace stage placeholder dynamically when using the API
  getApiUrl: function(stageName) {
    return this.api_base_url.replace("{StageNameParam}", stageName);
  }
};

export default config;
