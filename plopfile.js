module.exports = function(plop) {
  plop.setGenerator('ui', {
    description: 'Generate a Material-UI component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name (PascalCase):'
      },
      {
        type: 'confirm', 
        name: 'hasChildren',
        message: 'Does this component have children?',
        default: false
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/base-component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/base-component-story.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/base-component-test.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.hbs'
      },
      {
        type: 'modify',
        path: 'src/components/index.ts',
        pattern: /(\/\* PLOP_INJECT_EXPORT \*\/)/gi,
        template: "export * from './{{pascalCase name}}';\n$1"
      }
    ]
  });
};
