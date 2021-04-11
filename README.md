## Overview

DeSODP was built by Team 311 for the Stanford Open Datathon. We followed the Open Data Handbook. 

## Data Collection:

We collected our data from Delaware State University’s publicly shared fact sheets. 

Additionally, we implemented a form for users to submit their own datasets

## Data Workflow

Our workflow is as follows:

Source data from Delaware State University Fact Book
Scrape data using Tabula
Clean and format data using Microsoft Excel
Log metadata in a Google Sheet, noting necessary fields
Export metadata spreadsheet as CSV
Run an offline script to convert the metadata file into json format. 
Manually upload metadata json file to AWS bucket along with datasets

We chose this as our approach to stay within our technical skill level while pushing ourselves to figure out a way to complete our mission of getting a data portal up and running. In the future, the workflow could be streamlined by implementing API requests to automate some of the steps. 

## Converting from CSV to JSON

Part of our workflow requires some light coding since we run an offline python script to convert our metadata from csv to json. Essentially, all that would need to be done is opening the csv_to_json python file and editing the file paths to correspond with the csv and json files in the metadata folder. Once that’s done, anyone can do the conversion by double clicking the python file so long as the csv and json files are present and named properly. 

## Data Storage and Access

Datasets are stored in an AWS bucket, which can be managed through the AWS root account and IAM user accounts. Each IAM user account has the ability to add and see the datasets. Only one account will have full access to add, modify, and delete objects if necessary.
