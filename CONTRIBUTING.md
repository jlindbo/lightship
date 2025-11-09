# Contributing to Lightship

Thank you for your interest in contributing to the Lightship website! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/lightship.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

## 📝 Development Process

### Code Style

- We use ESLint and TypeScript for code quality
- Run `npm run lint` before committing
- Run `npm run typecheck` to check types
- Follow the existing code style

### Commit Messages

Use clear and descriptive commit messages:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for test additions/changes
- `chore:` for maintenance tasks

Example: `feat: add boat comparison feature`

### Component Guidelines

When creating new components:
1. Use TypeScript interfaces for props
2. Keep components focused and single-purpose
3. Use Tailwind CSS for styling
4. Add JSDoc comments for complex logic
5. Export components as default

Example:
```tsx
interface MyComponentProps {
  title: string;
  description?: string;
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
```

### Testing

- Test your changes locally before submitting PR
- Ensure the build passes: `npm run build`
- Check for TypeScript errors: `npm run typecheck`
- Verify responsive design on different screen sizes

## 🐛 Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 💡 Suggesting Features

We welcome feature suggestions! Please:
- Check existing issues first
- Provide detailed description
- Explain the use case
- Include mockups/examples if possible

## 📋 Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure all tests pass
3. Update documentation as necessary
4. Request review from maintainers
5. Address review feedback promptly

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive criticism
- Respect differing opinions

## 📞 Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Contact the maintainers
- Join our community discussions

Thank you for contributing to Lightship! ⚡🚤
