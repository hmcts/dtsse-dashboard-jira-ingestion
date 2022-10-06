import JiraApi from 'jira-client';
import { config } from '../config';

// Initialize
const jira = new JiraApi({
  protocol: 'https',
  host: 'tools.hmcts.net',
  apiVersion: '2',
  strictSSL: true,
  base: '/jira',
  bearer: config.jiraToken,
});

const run = async () => {
  const projects = await jira.listProjects();
  console.log(projects);
  process.exit(0);
};

export default run;
