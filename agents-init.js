#!/usr/bin/env node

/**
 * agents-init.js
 * Interactive CLI tool to initialize AI agent development framework
 * 
 * This script guides users through setting up the AI agent framework
 * by prompting for project details and generating customized templates.
 */

const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const techStackPresets = require('./tech-stack-presets');

// Main initialization function
async function main() {
  console.log(chalk.blue.bold('\n🤖 AI Agent Framework Initializer'));
  console.log(chalk.blue('==================================\n'));
  console.log('Let\'s set up your AI-assisted development environment!\n');

  try {
    // Step 1: Project Setup
    const projectAnswers = await promptProjectSetup();
    
    // Step 2: Tech Stack Selection
    const techStackAnswers = await promptTechStack();
    
    // Step 3: Feature Planning (optional)
    const featureAnswers = await promptFeaturePlanning();
    
    // Step 4: Show Summary and Confirm
    const confirmation = await showSummaryAndConfirm(projectAnswers, techStackAnswers, featureAnswers);
    
    if (!confirmation.proceed) {
      console.log(chalk.yellow('\n❌ Initialization cancelled.'));
      process.exit(0);
    }
    
    // Step 5: Generate Files
    await generateAgentFramework(projectAnswers, techStackAnswers, featureAnswers);
    
    // Step 6: Show Next Steps
    showNextSteps(projectAnswers);
    
  } catch (error) {
    if (error.isTtyError) {
      console.error(chalk.red('Prompt couldn\'t be rendered in the current environment'));
    } else {
      console.error(chalk.red('Error:'), error.message);
    }
    process.exit(1);
  }
}

// Step 1: Project Setup Prompts
async function promptProjectSetup() {
  console.log(chalk.cyan.bold('📦 Project Setup'));
  console.log(chalk.cyan('----------------\n'));
  
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Project name:',
      validate: (input) => input.trim().length > 0 || 'Project name is required',
      filter: (input) => input.trim()
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description (one line):',
      validate: (input) => input.trim().length > 0 || 'Description is required',
      filter: (input) => input.trim()
    },
    {
      type: 'input',
      name: 'targetUsers',
      message: 'Target users:',
      validate: (input) => input.trim().length > 0 || 'Target users is required',
      filter: (input) => input.trim()
    }
  ]);
}

// Step 2: Tech Stack Prompts
async function promptTechStack() {
  console.log(chalk.cyan.bold('\n🛠️  Tech Stack'));
  console.log(chalk.cyan('--------------\n'));
  
  const presetKeys = Object.keys(techStackPresets);
  const presetChoices = presetKeys.map((key, index) => ({
    name: `${index + 1}. ${techStackPresets[key].name}`,
    value: key
  }));
  
  presetChoices.push({
    name: `${presetChoices.length + 1}. Custom (I'll configure manually)`,
    value: 'custom'
  });
  
  const { presetChoice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'presetChoice',
      message: 'Choose a preset or customize:',
      choices: presetChoices
    }
  ]);
  
  if (presetChoice === 'custom') {
    return await promptCustomTechStack();
  }
  
  const preset = techStackPresets[presetChoice];
  
  // Show preset details
  console.log(chalk.green('\n✓ Using preset:'));
  console.log(`  - Framework: ${preset.framework}`);
  console.log(`  - Language: ${preset.language}`);
  console.log(`  - Database: ${preset.database}`);
  console.log(`  - Testing: ${preset.testing}`);
  console.log(`  - ORM: ${preset.orm}`);
  
  const { customize } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'customize',
      message: 'Customize this preset?',
      default: false
    }
  ]);
  
  if (customize) {
    return await promptCustomTechStack(preset);
  }
  
  return { preset: presetChoice, ...preset, isPreset: true };
}

// Custom Tech Stack Configuration
async function promptCustomTechStack(defaults = {}) {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'framework',
      message: 'Framework:',
      default: defaults.framework || 'Next.js 15',
      validate: (input) => input.trim().length > 0 || 'Framework is required'
    },
    {
      type: 'input',
      name: 'language',
      message: 'Language:',
      default: defaults.language || 'TypeScript',
      validate: (input) => input.trim().length > 0 || 'Language is required'
    },
    {
      type: 'input',
      name: 'database',
      message: 'Database:',
      default: defaults.database || 'PostgreSQL',
      validate: (input) => input.trim().length > 0 || 'Database is required'
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Testing framework:',
      default: defaults.testing || 'Jest',
      validate: (input) => input.trim().length > 0 || 'Testing framework is required'
    },
    {
      type: 'input',
      name: 'otherTools',
      message: 'Other key tools (comma-separated):',
      default: defaults.otherTools ? defaults.otherTools.join(', ') : '',
      filter: (input) => input.split(',').map(s => s.trim()).filter(s => s)
    },
    {
      type: 'input',
      name: 'testCommand',
      message: 'Test command:',
      default: defaults.testCommand || 'npm test'
    },
    {
      type: 'input',
      name: 'buildCommand',
      message: 'Build command:',
      default: defaults.buildCommand || 'npm run build'
    },
    {
      type: 'input',
      name: 'devServerCommand',
      message: 'Dev server command:',
      default: defaults.devServerCommand || 'npm run dev'
    },
    {
      type: 'input',
      name: 'lintCommand',
      message: 'Lint command:',
      default: defaults.lintCommand || 'npm run lint'
    }
  ]);
}

// Step 3: Feature Planning Prompts
async function promptFeaturePlanning() {
  console.log(chalk.cyan.bold('\n🎯 Feature Planning (PM Mode)'));
  console.log(chalk.cyan('------------------------------\n'));
  
  const { problemStatement } = await inquirer.prompt([
    {
      type: 'input',
      name: 'problemStatement',
      message: 'What problem does your app solve?',
      validate: (input) => input.trim().length > 0 || 'Problem statement is required'
    }
  ]);
  
  const capabilities = [];
  console.log(chalk.dim('\nDescribe your MVP in 3-5 core capabilities (press Enter with empty input when done):'));
  
  for (let i = 1; i <= 5; i++) {
    const { capability } = await inquirer.prompt([
      {
        type: 'input',
        name: 'capability',
        message: `${i}.`,
        validate: (input) => {
          if (i <= 3 && !input.trim()) {
            return 'At least 3 capabilities required';
          }
          return true;
        }
      }
    ]);
    
    if (!capability.trim()) break;
    capabilities.push(capability.trim());
  }
  
  const { createFirstTask } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'createFirstTask',
      message: 'Want to define your first feature now?',
      default: true
    }
  ]);
  
  let firstFeature = null;
  if (createFirstTask) {
    const { featureName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'featureName',
        message: 'First feature (e.g., "User can create a new task"):',
        validate: (input) => input.trim().length > 0 || 'Feature name is required'
      }
    ]);
    firstFeature = featureName;
  }
  
  return {
    problemStatement,
    capabilities,
    firstFeature
  };
}

// Show Summary and Confirm
async function showSummaryAndConfirm(projectAnswers, techStackAnswers, featureAnswers) {
  console.log(chalk.cyan.bold('\n✅ Summary'));
  console.log(chalk.cyan('----------\n'));
  
  console.log(chalk.white.bold('Project:'), projectAnswers.projectName);
  console.log(chalk.white.bold('Description:'), projectAnswers.description);
  console.log(chalk.white.bold('Target Users:'), projectAnswers.targetUsers);
  console.log();
  
  console.log(chalk.white.bold('Stack:'), 
    `${techStackAnswers.framework} + ${techStackAnswers.language} + ${techStackAnswers.database}`);
  console.log(chalk.white.bold('Testing:'), techStackAnswers.testing);
  console.log();
  
  console.log(chalk.white.bold('Features:'), `${featureAnswers.capabilities.length} core capabilities defined`);
  if (featureAnswers.firstFeature) {
    console.log(chalk.white.bold('Tasks:'), `1 task created (TASK-001: ${featureAnswers.firstFeature})`);
  }
  console.log();
  
  return await inquirer.prompt([
    {
      type: 'confirm',
      name: 'proceed',
      message: 'Generate?',
      default: true
    }
  ]);
}

// Generate Agent Framework Files
async function generateAgentFramework(projectAnswers, techStackAnswers, featureAnswers) {
  console.log(chalk.green.bold('\n✨ Creating files...\n'));
  
  const templateDir = path.join(__dirname, 'TEMPLATE_AGENTS');
  const outputDir = path.join(process.cwd(), 'agents');
  const tasksOutputDir = path.join(process.cwd(), 'tasks');
  
  // Check if directories already exist
  if (await fs.pathExists(outputDir)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: `'agents/' directory already exists. Overwrite?`,
        default: false
      }
    ]);
    
    if (!overwrite) {
      console.log(chalk.yellow('\n❌ Cancelled to avoid overwriting existing files.'));
      process.exit(0);
    }
    
    await fs.remove(outputDir);
  }
  
  // Copy template directory
  await fs.copy(templateDir, outputDir);
  
  // Copy tasks directory
  if (!(await fs.pathExists(tasksOutputDir))) {
    await fs.copy(path.join(templateDir, 'tasks'), tasksOutputDir);
  }
  
  // Get all markdown files to process
  const filesToProcess = await getMarkdownFiles(outputDir);
  
  // Process each file and replace placeholders
  for (const file of filesToProcess) {
    await replaceplaceholdersInFile(file, projectAnswers, techStackAnswers, featureAnswers);
    console.log(chalk.green('  ✓'), path.relative(process.cwd(), file));
  }
  
  // Generate ROADMAP.md with initial content
  await generateRoadmap(outputDir, projectAnswers, featureAnswers);
  
  // Generate first task if requested
  if (featureAnswers.firstFeature) {
    await generateFirstTask(tasksOutputDir, projectAnswers, featureAnswers);
  }
  
  console.log(chalk.green('\n✨ All files created successfully!\n'));
}

// Get all markdown files recursively
async function getMarkdownFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...await getMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Replace placeholders in a file
async function replaceplaceholdersInFile(filePath, projectAnswers, techStackAnswers, featureAnswers) {
  let content = await fs.readFile(filePath, 'utf-8');
  
  // Project placeholders
  content = content.replace(/\[YOUR_PROJECT_NAME\]/g, projectAnswers.projectName);
  content = content.replace(/\[BRIEF_DESCRIPTION\]/g, projectAnswers.description);
  content = content.replace(/\[TARGET_USERS\]/g, projectAnswers.targetUsers);
  
  // Tech stack placeholders
  const techStack = `${techStackAnswers.framework}, ${techStackAnswers.language}, ${techStackAnswers.database}, ${techStackAnswers.testing}`;
  content = content.replace(/\[YOUR_TECH_STACK[^\]]*\]/g, techStack);
  content = content.replace(/\[FRAMEWORK\/LANGUAGE\]/g, techStackAnswers.framework);
  content = content.replace(/\[DATABASE\]/g, techStackAnswers.database);
  content = content.replace(/\[TESTING_TOOLS\]/g, techStackAnswers.testing);
  content = content.replace(/\[OTHER_KEY_TOOLS\]/g, 
    techStackAnswers.otherTools ? techStackAnswers.otherTools.join(', ') : 'N/A');
  
  // Command placeholders
  if (techStackAnswers.testCommand) {
    content = content.replace(/\[test-command\]/g, techStackAnswers.testCommand);
    content = content.replace(/\[test-coverage-command\]/g, techStackAnswers.testCoverageCommand || `${techStackAnswers.testCommand} --coverage`);
    content = content.replace(/\[test-watch-command\]/g, techStackAnswers.testWatchCommand || `${techStackAnswers.testCommand} --watch`);
  }
  
  if (techStackAnswers.buildCommand) {
    content = content.replace(/\[build-command\]/g, techStackAnswers.buildCommand);
  }
  
  if (techStackAnswers.devServerCommand) {
    content = content.replace(/\[dev-server-command\]/g, techStackAnswers.devServerCommand);
  }
  
  if (techStackAnswers.lintCommand) {
    content = content.replace(/\[lint-command\]/g, techStackAnswers.lintCommand);
  }
  
  // Directory structure placeholders (if preset was used)
  if (techStackAnswers.isPreset) {
    content = content.replace(/\[your-project\]/g, projectAnswers.projectName.toLowerCase().replace(/\s+/g, '-'));
    content = content.replace(/\[source-directory\]/g, techStackAnswers.sourceDirectory);
    content = content.replace(/\[api-or-routes\]/g, techStackAnswers.apiDirectory);
    content = content.replace(/\[services\]/g, techStackAnswers.servicesDirectory);
    content = content.replace(/\[models-or-entities\]/g, techStackAnswers.modelsDirectory);
    content = content.replace(/\[components-or-views\]/g, techStackAnswers.componentsDirectory);
    content = content.replace(/\[utils-or-lib\]/g, techStackAnswers.utilsDirectory);
    content = content.replace(/\[config\]/g, techStackAnswers.configDirectory);
    content = content.replace(/\[test-directory\]/g, techStackAnswers.testDirectory);
  }
  
  // Date placeholder
  const today = new Date().toISOString().split('T')[0];
  content = content.replace(/\[DATE\]/g, today);
  
  // URL placeholder (empty for now)
  content = content.replace(/\[YOUR_PRODUCTION_URL[^\]]*\]/g, 'Not yet deployed');
  
  await fs.writeFile(filePath, content, 'utf-8');
}

// Generate ROADMAP.md with initial content
async function generateRoadmap(outputDir, projectAnswers, featureAnswers) {
  const roadmapPath = path.join(outputDir, 'ROADMAP.md');
  let content = await fs.readFile(roadmapPath, 'utf-8');
  
  // Add initial capabilities to roadmap
  if (featureAnswers.capabilities.length > 0) {
    const capabilitiesSection = featureAnswers.capabilities
      .map((cap, i) => `${i + 1}. ${cap}`)
      .join('\n');
    
    // Find and replace the backlog section
    content = content.replace(
      /### High Priority\n\n- \[Placeholder\]/,
      `### High Priority\n\n**MVP Core Capabilities:**\n${capabilitiesSection}\n\n- Additional features to be prioritized by Product Manager agent`
    );
  }
  
  // Add first task if created
  if (featureAnswers.firstFeature) {
    content = content.replace(
      /### Current Sprint/,
      `### Current Sprint\n\n**TASK-001**: ${featureAnswers.firstFeature}\n- Status: Ready for implementation\n- Priority: High\n- See: \`tasks/TASK-001-${featureAnswers.firstFeature.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}.md\``
    );
  }
  
  await fs.writeFile(roadmapPath, content, 'utf-8');
}

// Generate first task file
async function generateFirstTask(tasksOutputDir, projectAnswers, featureAnswers) {
  const taskSlug = featureAnswers.firstFeature.toLowerCase().replace(/\s+/g, '-').substring(0, 50);
  const taskPath = path.join(tasksOutputDir, `TASK-001-${taskSlug}.md`);
  
  const taskContent = `# TASK-001: ${featureAnswers.firstFeature}

**Status**: 🔵 To Do  
**Type**: Feature  
**Mode**: Delivery  
**Priority**: High  
**Estimated Effort**: Medium

---

## Description

### What
${featureAnswers.firstFeature}

### Why
This is the first feature for ${projectAnswers.projectName}, establishing the foundation for ${projectAnswers.description.toLowerCase()}.

### Context
Initial implementation to validate the core functionality and architecture.

---

## Acceptance Criteria

- [ ] Feature is functional and meets user needs
- [ ] Code follows architecture guidelines in \`agents/ARCHITECTURE.md\`
- [ ] Unit tests written for business logic
- [ ] Integration tests written for API endpoints
- [ ] Manual testing completed
- [ ] Documentation updated

---

## Technical Approach

1. Design data model
2. Implement service layer with business logic
3. Create API endpoints
4. Add validation and error handling
5. Write comprehensive tests
6. Update documentation

---

## Testing Requirements

### Unit Tests
- [ ] Service layer business logic tested
- [ ] Edge cases covered
- [ ] Error conditions tested

### Integration Tests
- [ ] API endpoints tested
- [ ] Request/response validation
- [ ] Error responses tested

---

## Definition of Done

See \`agents/DEVELOPMENT_WORKFLOW.md\` for complete checklist.

**Key requirements:**
- [ ] All acceptance criteria met
- [ ] Tests pass with good coverage
- [ ] Code reviewed and approved
- [ ] No linter errors
- [ ] Documentation updated
- [ ] Manually tested in dev environment

---

## Branch Information

**Suggested branch**: \`feature/${taskSlug}\`

---

## Notes

Generated by agents-init. Customize this task based on specific requirements.

For guidance, consult:
- Product Manager agent: \`agents/agent-product-manager/AGENTS.md\`
- Software Engineer agent: \`agents/agent-software-engineer/AGENTS.md\`
`;
  
  await fs.writeFile(taskPath, taskContent, 'utf-8');
  console.log(chalk.green('  ✓'), path.relative(process.cwd(), taskPath));
}

// Show Next Steps
function showNextSteps(projectAnswers) {
  console.log(chalk.cyan.bold('🚀 Next Steps:\n'));
  console.log(`  1. Review ${chalk.yellow('agents/BUSINESS_REQUIREMENTS.md')}`);
  console.log(`  2. Review ${chalk.yellow('agents/ARCHITECTURE.md')} and customize for your project structure`);
  console.log(`  3. Start with: ${chalk.green(`"Act as Software Engineer agent. Implement tasks/TASK-001-*.md"`)}`);
  console.log(`  4. See ${chalk.yellow('agents/QUICK_START.md')} for more guidance\n`);
  console.log(chalk.green.bold(`Done! Your AI agent framework is ready for ${projectAnswers.projectName}. 🎉\n`));
}

// Run the main function
main();

