// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "nl63ssoctq3pcbf7901sedjtd",     // CognitoClientID
  "api_base_url": "https://ggawl4trv1.execute-api.eu-north-1.amazonaws.com/prod", // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-thetrainingstack.auth.eu-north-1.amazoncognito.com", // CognitoDomainName
  "redirect_url": "https://master.d1tgwb9esjzq6i.amplifyapp.com"  // AmplifyURL
};

export default config;

