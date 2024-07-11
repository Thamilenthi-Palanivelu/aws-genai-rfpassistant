#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
require("source-map-support/register");
const aws_genai_rfpassistant_stack_1 = require("../lib/aws-genai-rfpassistant-stack");
const cdk_nag_1 = require("cdk-nag");
const config_1 = require("./config");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const app = new cdk.App();
const config = config_1.getConfig();
new aws_genai_rfpassistant_stack_1.AwsGenaiRfpAssistantStack(app, `${config.prefix}GenaiRfpAssistantStack`, {
    config,
    env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT,
    },
});
aws_cdk_lib_1.Aspects.of(app).add(new cdk_nag_1.AwsSolutionsChecks({ verbose: true }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWdlbmFpLXJmcGFzc2lzdGFudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF3cy1nZW5haS1yZnBhc3Npc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQW1DO0FBQ25DLHVDQUFxQztBQUNyQyxzRkFBZ0Y7QUFDaEYscUNBQTZDO0FBQzdDLHFDQUFxQztBQUNyQyw2Q0FBc0M7QUFFdEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsTUFBTSxNQUFNLEdBQUcsa0JBQVMsRUFBRSxDQUFDO0FBRTNCLElBQUksd0RBQXlCLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEVBQUU7SUFDM0UsTUFBTTtJQUNOLEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtRQUN0QyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7S0FDekM7Q0FDRixDQUFDLENBQUM7QUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSw0QkFBa0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIjtcbmltcG9ydCB7IEF3c0dlbmFpUmZwQXNzaXN0YW50U3RhY2sgfSBmcm9tIFwiLi4vbGliL2F3cy1nZW5haS1yZnBhc3Npc3RhbnQtc3RhY2tcIjtcbmltcG9ydCB7IEF3c1NvbHV0aW9uc0NoZWNrcyB9IGZyb20gXCJjZGstbmFnXCI7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IEFzcGVjdHMgfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKCk7XG5cbm5ldyBBd3NHZW5haVJmcEFzc2lzdGFudFN0YWNrKGFwcCwgYCR7Y29uZmlnLnByZWZpeH1HZW5haVJmcEFzc2lzdGFudFN0YWNrYCwge1xuICBjb25maWcsXG4gIGVudjoge1xuICAgIHJlZ2lvbjogcHJvY2Vzcy5lbnYuQ0RLX0RFRkFVTFRfUkVHSU9OLFxuICAgIGFjY291bnQ6IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX0FDQ09VTlQsXG4gIH0sXG59KTtcblxuQXNwZWN0cy5vZihhcHApLmFkZChuZXcgQXdzU29sdXRpb25zQ2hlY2tzKHsgdmVyYm9zZTogdHJ1ZSB9KSk7XG4iXX0=