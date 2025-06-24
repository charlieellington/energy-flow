---
title: Development Documentation Build
---

# Development Documentation Build


Tools to experiment with: 
- MCP Figma to Cursor: https://uxplanet.org/figma-mcp-complete-guide-c45af0975ab8?gi=275caecae710 
- Version control: https://www.youtube.com/watch?app=desktop&v=JfMcFjD-tIA 
- Simple browser in Cursor 

--- 

Process: 

## 1 – Planning 

Whilst building the No Bad Parts Collective POC I tried a new approach. This was based on a day of coding the POC and hitting a lot of errors and getting stuck in debug loops. I decided to start again using a more intense planning approach: 

a) Use o3 and Deep Research, sample prompt: 
	"Research documentation and best practices for the tools and integrations we're using and create me a detailed build plan"
	- For example, for No Bad... I'm using Daily and Pipekit and I was using research to look at all the documentation and best practices. 
b) Critique the plan 
	I went through several rounds of critiquing  the plan with o3, looking for alternatives, weighting up compromises. 
c) Moving the plan to Cursor 
	I then moved to Cursor and put the outcome of the critique into the main plan with prompts.
	At this stage the plan is an overview with steps. 
d) o3 Research on each step 
	I went deeper into each step with research asking it to search documentation, code examples and best practices. 
	I then updated cursor files with the research results. 
e) Whole plan back into o3 research 
	I then had files for each step in Cursor, 
	I put them back into chatGPT with the following prompt: 
```bash
We now have a buildplan summary and steps 1-7 edited and ready for us to develop from. In this research, I want you to review all the steps as a whole and make sure they connected and correct with the full context of the project. The output should be a recommendation of changes that we need to make to make to each step to ensure the POC is functioning, working, and very easy to build without errors. I will use the research report to ask a high model in Cursor's AI agent to make edits to these files. Search the web and documentation from the services we are using to make sure we're following best practices and doing this correctly. The report should make recommendations for each step if anything needs to change.