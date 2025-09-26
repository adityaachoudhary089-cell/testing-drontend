// data/appMetadata.js
export const appMetadata = {
  // === WEB BROWSERS (6) ===
  'chrome': {
    displayName: 'Google Chrome',
    description: 'Fast, secure, and feature-rich web browser with Google integration',
    developer: 'Google',
    version: '120.0.6099',
    size: '95 MB',
    rating: 4.6,
    downloads: '5B+',
    tags: ['browser', 'web', 'google', 'chromium'],
    imageUrl: '/app-icons/browser/chrome.png'
  },
  'firefox': {
    displayName: 'Mozilla Firefox',
    description: 'Open-source web browser focused on privacy and security',
    developer: 'Mozilla Foundation',
    version: '121.0',
    size: '85 MB',
    rating: 4.4,
    downloads: '1B+',
    tags: ['browser', 'privacy', 'open-source', 'mozilla'],
    imageUrl: '/src/assets/app-icons/browser/firefox.png'
  },
  'chromium': {
    displayName: 'Chromium',
    description: 'Open-source version of Google Chrome browser',
    developer: 'Chromium Project',
    version: '120.0.6099',
    size: '92 MB',
    rating: 4.0,
    downloads: '50M+',
    tags: ['browser', 'open-source', 'chromium'],
    imageUrl: '/src/assets/app-icons/browser/chromium.png'
  },
  'brave': {
    displayName: 'Brave Browser',
    description: 'Privacy-focused browser that blocks ads and trackers by default',
    developer: 'Brave Software',
    version: '1.60.125',
    size: '90 MB',
    rating: 4.3,
    downloads: '100M+',
    tags: ['browser', 'privacy', 'ad-blocker', 'crypto'],
    imageUrl: '/src/assets/app-icons/browser/brave.png'
  },
  'opera': {
    displayName: 'Opera',
    description: 'Feature-packed browser with built-in VPN and ad blocker',
    developer: 'Opera Software',
    version: '105.0.4970',
    size: '88 MB',
    rating: 4.1,
    downloads: '200M+',
    tags: ['browser', 'vpn', 'features'],
    imageUrl: '/src/assets/app-icons/browser/opera.png'
  },
  'edge': {
    displayName: 'Microsoft Edge',
    description: 'Modern web browser with enhanced security and Microsoft integration',
    developer: 'Microsoft',
    version: '120.0.2210',
    size: '105 MB',
    rating: 4.2,
    downloads: '500M+',
    tags: ['browser', 'microsoft', 'security'],
    imageUrl: '/src/assets/app-icons/browser/edge.png'
  },

  // === IDEs & CODE EDITORS (15) ===
  'vscode': {
    displayName: 'Visual Studio Code',
    description: 'Free, powerful source code editor with IntelliSense and debugging',
    developer: 'Microsoft',
    version: '1.85.2',
    size: '75 MB',
    rating: 4.8,
    downloads: '100M+',
    tags: ['editor', 'ide', 'javascript', 'typescript'],
    imageUrl: '/src/assets/app-icons/ide/vscode.png'
  },
  'intellij': {
    displayName: 'IntelliJ IDEA Community',
    description: 'Intelligent Java IDE with smart coding assistance and refactoring',
    developer: 'JetBrains',
    version: '2023.3.2',
    size: '450 MB',
    rating: 4.7,
    downloads: '50M+',
    tags: ['ide', 'java', 'kotlin', 'smart'],
    imageUrl: '/src/assets/app-icons/ide/intellij.png'
  },
  'pycharm': {
    displayName: 'PyCharm Community',
    description: 'Python IDE for professional developers with intelligent code analysis',
    developer: 'JetBrains',
    version: '2023.3.2',
    size: '400 MB',
    rating: 4.6,
    downloads: '20M+',
    tags: ['python', 'ide', 'debugging', 'smart'],
    imageUrl: '/src/assets/app-icons/ide/pycharm.png'
  },
  'eclipse': {
    displayName: 'Eclipse IDE',
    description: 'Extensible development platform and IDE for Java and more',
    developer: 'Eclipse Foundation',
    version: '2023-12',
    size: '350 MB',
    rating: 4.2,
    downloads: '15M+',
    tags: ['java', 'ide', 'plugins', 'enterprise'],
    imageUrl: '/src/assets/app-icons/ide/eclipse.png'
  },
  'netbeans': {
    displayName: 'NetBeans IDE',
    description: 'Free, open-source IDE for Java, PHP, and web development',
    developer: 'Apache Software Foundation',
    version: '19.0',
    size: '280 MB',
    rating: 4.1,
    downloads: '12M+',
    tags: ['java', 'ide', 'open-source', 'apache'],
    imageUrl: '/src/assets/app-icons/ide/netbeans.png'
  },
  'sublime': {
    displayName: 'Sublime Text',
    description: 'Sophisticated text editor for code, markup and prose with speed',
    developer: 'Sublime HQ',
    version: '4.0.147',
    size: '45 MB',
    rating: 4.6,
    downloads: '25M+',
    tags: ['editor', 'fast', 'plugins'],
    imageUrl: '/src/assets/app-icons/ide/sublime.png'
  },
  'atom': {
    displayName: 'Atom',
    description: 'Hackable text editor for the 21st Century with Git integration',
    developer: 'GitHub',
    version: '1.60.0',
    size: '180 MB',
    rating: 4.2,
    downloads: '20M+',
    tags: ['editor', 'hackable', 'packages'],
    imageUrl: '/src/assets/app-icons/ide/atom.png'
  },
  'vim': {
    displayName: 'Vim',
    description: 'Highly configurable text editor built for efficient text editing',
    developer: 'Vim Development Team',
    version: '9.0.2153',
    size: '15 MB',
    rating: 4.5,
    downloads: '10M+',
    tags: ['editor', 'terminal', 'powerful', 'modal'],
    imageUrl: '/src/assets/app-icons/ide/vim.png'
  },
  'emacs': {
    displayName: 'Emacs',
    description: 'Extensible, customizable, self-documenting text editor',
    developer: 'GNU Project',
    version: '29.1',
    size: '120 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['editor', 'extensible', 'lisp'],
    imageUrl: '/src/assets/app-icons/ide/emacs.png'
  },
  'androidstudio': {
    displayName: 'Android Studio',
    description: 'Official IDE for Android development with layout editor',
    developer: 'Google',
    version: '2023.1.1',
    size: '900 MB',
    rating: 4.3,
    downloads: '30M+',
    tags: ['android', 'ide', 'mobile', 'java'],
    imageUrl: '/src/assets/app-icons/ide/androidstudio.png'
  },
  'codeblocks': {
    displayName: 'Code::Blocks',
    description: 'Cross-platform C/C++ IDE with project management',
    developer: 'Code::Blocks Team',
    version: '20.03',
    size: '55 MB',
    rating: 4.1,
    downloads: '8M+',
    tags: ['c++', 'c', 'ide', 'cross-platform'],
    imageUrl: '/src/assets/app-icons/ide/codeblocks.png'
  },
  'qtcreator': {
    displayName: 'Qt Creator',
    description: 'Cross-platform C++ IDE for Qt application development',
    developer: 'Qt Company',
    version: '12.0.2',
    size: '150 MB',
    rating: 4.3,
    downloads: '8M+',
    tags: ['qt', 'c++', 'gui', 'cross-platform'],
    imageUrl: '/src/assets/app-icons/ide/qtcreator.png'
  },
  'geany': {
    displayName: 'Geany',
    description: 'Lightweight IDE with basic IDE features and syntax highlighting',
    developer: 'Geany Team',
    version: '1.38',
    size: '18 MB',
    rating: 4.0,
    downloads: '5M+',
    tags: ['lightweight', 'ide', 'fast'],
    imageUrl: '/src/assets/app-icons/ide/geany.png'
  },
  'bluefish': {
    displayName: 'Bluefish Editor',
    description: 'Advanced editor for web developers and programmers',
    developer: 'Bluefish Team',
    version: '2.2.12',
    size: '25 MB',
    rating: 4.0,
    downloads: '2M+',
    tags: ['web', 'html', 'css', 'editor'],
    imageUrl: '/src/assets/app-icons/ide/bluefish.png'
  },
  'notepadqq': {
    displayName: 'Notepadqq',
    description: 'Text editor for Linux similar to Notepad++ on Windows',
    developer: 'Notepadqq Team',
    version: '2.0.5',
    size: '12 MB',
    rating: 3.9,
    downloads: '3M+',
    tags: ['text-editor', 'notepad++', 'simple'],
    imageUrl: '/src/assets/app-icons/ide/notepadqq.png'
  },

  // === PROGRAMMING LANGUAGES (18) ===
  'nodejs': {
    displayName: 'Node.js & npm',
    description: 'JavaScript runtime built on Chrome\'s V8 engine for server-side development',
    developer: 'Node.js Foundation',
    version: '20.10.0',
    size: '35 MB',
    rating: 4.8,
    downloads: '100M+',
    tags: ['javascript', 'runtime', 'npm', 'server'],
    imageUrl: '/src/assets/app-icons/programing/nodejs.png'
  },
  'python3': {
    displayName: 'Python 3 & pip',
    description: 'Powerful programming language for all purposes with package manager',
    developer: 'Python Software Foundation',
    version: '3.12.1',
    size: '50 MB',
    rating: 4.9,
    downloads: '200M+',
    tags: ['python', 'programming', 'pip', 'scripting'],
    imageUrl: '/src/assets/app-icons/programing/python3.png'
  },
  'java': {
    displayName: 'OpenJDK (Java)',
    description: 'Open-source implementation of Java Platform, Standard Edition',
    developer: 'Oracle Corporation',
    version: '21.0.1',
    size: '200 MB',
    rating: 4.6,
    downloads: '500M+',
    tags: ['java', 'jdk', 'enterprise', 'programming'],
    imageUrl: '/src/assets/app-icons/programing/java.png'
  },
  'go': {
    displayName: 'Go (Golang)',
    description: 'Simple, fast, and reliable programming language from Google',
    developer: 'Google',
    version: '1.21.5',
    size: '120 MB',
    rating: 4.6,
    downloads: '15M+',
    tags: ['go', 'golang', 'concurrent', 'google'],
    imageUrl: '/src/assets/app-icons/programing/golang.png'
  },
  'rust': {
    displayName: 'Rust & Cargo',
    description: 'Fast and memory-efficient systems programming language',
    developer: 'Rust Foundation',
    version: '1.75.0',
    size: '150 MB',
    rating: 4.7,
    downloads: '10M+',
    tags: ['rust', 'systems', 'memory-safe', 'cargo'],
    imageUrl: '/src/assets/app-icons/programing/rust.png'
  },
  'php': {
    displayName: 'PHP',
    description: 'Popular general-purpose scripting language for web development',
    developer: 'The PHP Group',
    version: '8.3.1',
    size: '65 MB',
    rating: 4.2,
    downloads: '80M+',
    tags: ['php', 'web', 'scripting', 'server-side'],
    imageUrl: '/src/assets/app-icons/programing/php.png'
  },
  'ruby': {
    displayName: 'Ruby & Gems',
    description: 'Dynamic, open source programming language with elegant syntax',
    developer: 'Ruby Community',
    version: '3.3.0',
    size: '55 MB',
    rating: 4.4,
    downloads: '15M+',
    tags: ['ruby', 'dynamic', 'gems', 'rails'],
    imageUrl: '/src/assets/app-icons/programing/ruby and gems.png'
  },
  'gcc': {
    displayName: 'GCC Compiler',
    description: 'GNU Compiler Collection for C, C++, and other languages',
    developer: 'GNU Project',
    version: '13.2.0',
    size: '120 MB',
    rating: 4.6,
    downloads: '50M+',
    tags: ['gcc', 'c', 'c++', 'compiler', 'gnu'],
    imageUrl: '/src/assets/app-icons/programing/gcc.png'
  },
  'clang': {
    displayName: 'Clang Compiler',
    description: 'C language family frontend for LLVM with excellent diagnostics',
    developer: 'LLVM Project',
    version: '17.0.6',
    size: '85 MB',
    rating: 4.4,
    downloads: '25M+',
    tags: ['c', 'c++', 'compiler', 'llvm', 'clang'],
    imageUrl: '/src/assets/app-icons/programing/clang.png'
  },
  'dotnet': {
    displayName: '.NET Core SDK',
    description: 'Cross-platform .NET development platform for modern applications',
    developer: 'Microsoft',
    version: '8.0.101',
    size: '180 MB',
    rating: 4.5,
    downloads: '30M+',
    tags: ['dotnet', 'csharp', 'cross-platform', 'microsoft'],
    imageUrl: '/src/assets/app-icons/programing/dotnet.png'
  },
  'kotlin': {
    displayName: 'Kotlin',
    description: 'Modern programming language for JVM, Android, and multiplatform development',
    developer: 'JetBrains',
    version: '1.9.21',
    size: '75 MB',
    rating: 4.5,
    downloads: '12M+',
    tags: ['kotlin', 'jvm', 'android', 'modern', 'jetbrains'],
    imageUrl: '/src/assets/app-icons/programing/kotlin.png'
  },
  'scala': {
    displayName: 'Scala',
    description: 'Modern multi-paradigm programming language for the JVM',
    developer: 'EPFL',
    version: '3.3.1',
    size: '150 MB',
    rating: 4.2,
    downloads: '5M+',
    tags: ['scala', 'jvm', 'functional', 'object-oriented'],
    imageUrl: '/src/assets/app-icons/programing/scala.png'
  },
  'dart': {
    displayName: 'Dart SDK',
    description: 'Client-optimized language for mobile, desktop, server, and web apps',
    developer: 'Google',
    version: '3.2.3',
    size: '200 MB',
    rating: 4.3,
    downloads: '8M+',
    tags: ['dart', 'flutter', 'mobile', 'web', 'google'],
    imageUrl: '/src/assets/app-icons/programing/dart.png'
  },
  'r': {
    displayName: 'R Language',
    description: 'Statistical computing and graphics language for data analysis',
    developer: 'R Foundation',
    version: '4.3.2',
    size: '95 MB',
    rating: 4.3,
    downloads: '10M+',
    tags: ['r', 'statistics', 'data-science', 'analytics'],
    imageUrl: '/src/assets/app-icons/programing/rlanguage.png'
  },
  'perl': {
    displayName: 'Perl',
    description: 'High-level, general-purpose programming language with text processing',
    developer: 'Perl Foundation',
    version: '5.38.2',
    size: '45 MB',
    rating: 4.1,
    downloads: '8M+',
    tags: ['perl', 'scripting', 'regex', 'text-processing'],
    imageUrl: '/src/assets/app-icons/programing/perl.png'
  },
  'lua': {
    displayName: 'Lua',
    description: 'Lightweight, embeddable scripting language for applications',
    developer: 'Lua.org',
    version: '5.4.6',
    size: '8 MB',
    rating: 4.3,
    downloads: '5M+',
    tags: ['lua', 'scripting', 'lightweight', 'embedded'],
    imageUrl: '/src/assets/app-icons/programing/lua.png'
  },
  'erlang': {
    displayName: 'Erlang',
    description: 'Concurrent, fault-tolerant programming language for distributed systems',
    developer: 'Ericsson',
    version: '26.2.1',
    size: '95 MB',
    rating: 4.2,
    downloads: '2M+',
    tags: ['erlang', 'concurrent', 'fault-tolerant', 'distributed'],
    imageUrl: '/src/assets/app-icons/programing/erlang.png'
  },
  'julia': {
    displayName: 'Julia',
    description: 'High-performance programming language for scientific computing',
    developer: 'Julia Computing',
    version: '1.10.0',
    size: '110 MB',
    rating: 4.4,
    downloads: '3M+',
    tags: ['julia', 'scientific', 'performance', 'computing'],
    imageUrl: '/src/assets/app-icons/programing/julia.png'
  },

  // === VERSION CONTROL (6) ===
  'git': {
    displayName: 'Git',
    description: 'Distributed version control system for tracking changes in source code',
    developer: 'Git Development Community',
    version: '2.43.0',
    size: '45 MB',
    rating: 4.9,
    downloads: '1B+',
    tags: ['version-control', 'distributed', 'source-code', 'git'],
    imageUrl: '/src/assets/app-icons/version control/git.png'
  },
  'githubcli': {
    displayName: 'GitHub CLI',
    description: 'GitHub command line tool for repository management',
    developer: 'GitHub',
    version: '2.40.1',
    size: '35 MB',
    rating: 4.3,
    downloads: '12M+',
    tags: ['github', 'cli', 'command-line', 'git'],
    imageUrl: '/src/assets/app-icons/version control/githubcli.png'
  },
  'gitkraken': {
    displayName: 'GitKraken',
    description: 'Cross-platform Git GUI client with visual merge conflict editor',
    developer: 'Axosoft',
    version: '9.12.0',
    size: '180 MB',
    rating: 4.4,
    downloads: '8M+',
    tags: ['git', 'gui', 'cross-platform', 'visual', 'merge'],
    imageUrl: '/src/assets/app-icons/version control/gitkraken.png'
  },
  'gitg': {
    displayName: 'GitG',
    description: 'Graphical user interface for Git version control',
    developer: 'GNOME Project',
    version: '3.32.1',
    size: '25 MB',
    rating: 4.2,
    downloads: '3M+',
    tags: ['git', 'gui', 'graphical', 'gnome'],
    imageUrl: '/src/assets/app-icons/version control/gitg.png'
  },
  'meld': {
    displayName: 'Meld Diff Viewer',
    description: 'Visual diff and merge tool for files and directories',
    developer: 'Meld Development Team',
    version: '3.22.0',
    size: '18 MB',
    rating: 4.1,
    downloads: '5M+',
    tags: ['diff', 'merge', 'visual', 'comparison'],
    imageUrl: '/src/assets/app-icons/version control/meld.png'
  },
  'svn': {
    displayName: 'Subversion',
    description: 'Centralized version control system for managing file and directory changes',
    developer: 'Apache Software Foundation',
    version: '1.14.3',
    size: '22 MB',
    rating: 4.0,
    downloads: '20M+',
    tags: ['svn', 'centralized', 'version-control', 'apache'],
    imageUrl: '/src/assets/app-icons/version control/svn.png'
  },

  // === DATABASES (10) ===
  'mysql': {
    displayName: 'MySQL Server',
    description: 'Popular open-source relational database management system',
    developer: 'Oracle Corporation',
    version: '8.2.0',
    size: '350 MB',
    rating: 4.6,
    downloads: '100M+',
    tags: ['mysql', 'relational', 'sql', 'server', 'database'],
    imageUrl: '/src/assets/app-icons/version control/mysql.png'
  },
  'postgresql': {
    displayName: 'PostgreSQL',
    description: 'Advanced open source relational database with JSON support',
    developer: 'PostgreSQL Global Development Group',
    version: '16.1',
    size: '300 MB',
    rating: 4.7,
    downloads: '80M+',
    tags: ['postgresql', 'relational', 'advanced', 'sql', 'json'],
    imageUrl: '/src/assets/app-icons/version control/postgresql.png'
  },
  'mongodb': {
    displayName: 'MongoDB',
    description: 'Document-oriented NoSQL database with flexible schema',
    developer: 'MongoDB Inc.',
    version: '7.0.4',
    size: '400 MB',
    rating: 4.3,
    downloads: '30M+',
    tags: ['nosql', 'document', 'mongodb', 'json', 'flexible'],
    imageUrl: '/src/assets/app-icons/version control/mongodb.png'
  },
  'redis': {
    displayName: 'Redis',
    description: 'In-memory data structure store used as database and cache',
    developer: 'Redis Ltd.',
    version: '7.2.3',
    size: '85 MB',
    rating: 4.6,
    downloads: '40M+',
    tags: ['redis', 'cache', 'in-memory', 'key-value', 'fast'],
    imageUrl: '/src/assets/app-icons/version control/redis.png'
  },
  'sqlite': {
    displayName: 'SQLite',
    description: 'Lightweight embedded SQL database engine',
    developer: 'SQLite Development Team',
    version: '3.44.2',
    size: '3 MB',
    rating: 4.5,
    downloads: '200M+',
    tags: ['sqlite', 'embedded', 'lightweight', 'sql', 'local'],
    imageUrl: '/src/assets/app-icons/version control/sqlite.png'
  },
  'mariadb': {
    displayName: 'MariaDB',
    description: 'Open source relational database forked from MySQL',
    developer: 'MariaDB Foundation',
    version: '11.2.2',
    size: '250 MB',
    rating: 4.4,
    downloads: '25M+',
    tags: ['mysql', 'relational', 'open-source', 'sql', 'mariadb'],
    imageUrl: '/src/assets/app-icons/version control/mariadb.png'
  },
  'dbeaver': {
    displayName: 'DBeaver',
    description: 'Universal database management tool with SQL editor',
    developer: 'DBeaver Corp',
    version: '23.3.1',
    size: '180 MB',
    rating: 4.5,
    downloads: '15M+',
    tags: ['database', 'sql', 'universal', 'gui', 'management'],
    imageUrl: '/src/assets/app-icons/version control/dbeaver.png'
  },
  'adminer': {
    displayName: 'Adminer',
    description: 'Full-featured database management tool written in PHP',
    developer: 'Adminer Team',
    version: '4.8.1',
    size: '2 MB',
    rating: 4.3,
    downloads: '5M+',
    tags: ['database', 'management', 'web', 'php', 'adminer'],
    imageUrl: '/src/assets/app-icons/version control/adminer.png'
  },
  'phpmyadmin': {
    displayName: 'phpMyAdmin',
    description: 'Web-based MySQL and MariaDB administration tool',
    developer: 'phpMyAdmin Team',
    version: '5.2.1',
    size: '35 MB',
    rating: 4.2,
    downloads: '50M+',
    tags: ['mysql', 'web', 'administration', 'php', 'mariadb'],
    imageUrl: '/src/assets/app-icons/version control/phpmyadmin.png'
  },
  'sqlitebrowser': {
    displayName: 'SQLite Browser',
    description: 'Visual tool for creating, designing and editing SQLite databases',
    developer: 'SQLite Browser Team',
    version: '3.12.2',
    size: '25 MB',
    rating: 4.1,
    downloads: '8M+',
    tags: ['sqlite', 'browser', 'visual', 'gui', 'database'],
    imageUrl: '/src/assets/app-icons/version control/sqlitebrowser.png'
  },

  // === DEVOPS & CONTAINERS (12) ===
  'docker': {
    displayName: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers',
    developer: 'Docker Inc.',
    version: '24.0.7',
    size: '150 MB',
    rating: 4.7,
    downloads: '100M+',
    tags: ['containers', 'virtualization', 'deployment', 'docker'],
    imageUrl: '/src/assets/app-icons/devops/docker.png'
  },
  'dockercompose': {
    displayName: 'Docker Compose',
    description: 'Tool for defining and running multi-container Docker applications',
    developer: 'Docker Inc.',
    version: '2.24.1',
    size: '45 MB',
    rating: 4.6,
    downloads: '80M+',
    tags: ['docker', 'compose', 'multi-container', 'orchestration'],
    imageUrl: '/src/assets/app-icons/devops/dockercompose.png'
  },
  'kubectl': {
    displayName: 'Kubernetes (kubectl)',
    description: 'Command line tool for controlling Kubernetes clusters',
    developer: 'Kubernetes',
    version: '1.29.0',
    size: '80 MB',
    rating: 4.6,
    downloads: '50M+',
    tags: ['kubernetes', 'orchestration', 'containers', 'kubectl'],
    imageUrl: '/src/assets/app-icons/devops/kubectl.png'
  },
  'minikube': {
    displayName: 'Minikube',
    description: 'Local Kubernetes development environment and testing platform',
    developer: 'Kubernetes',
    version: '1.32.0',
    size: '90 MB',
    rating: 4.4,
    downloads: '12M+',
    tags: ['kubernetes', 'local', 'development', 'testing'],
    imageUrl: '/src/assets/app-icons/devops/minikube.png'
  },
  'terraform': {
    displayName: 'Terraform',
    description: 'Infrastructure as code software tool for building and managing infrastructure',
    developer: 'HashiCorp',
    version: '1.6.6',
    size: '65 MB',
    rating: 4.6,
    downloads: '40M+',
    tags: ['infrastructure', 'iac', 'terraform', 'hashicorp'],
    imageUrl: '/src/assets/app-icons/devops/terraform.png'
  },
  'ansible': {
    displayName: 'Ansible',
    description: 'IT automation and configuration management platform',
    developer: 'Red Hat',
    version: '9.1.0',
    size: '85 MB',
    rating: 4.5,
    downloads: '25M+',
    tags: ['automation', 'configuration', 'infrastructure', 'yaml'],
    imageUrl: '/src/assets/app-icons/devops/ansible.png'
  },
  'vagrant': {
    displayName: 'Vagrant',
    description: 'Development environment management tool with virtual machines',
    developer: 'HashiCorp',
    version: '2.4.0',
    size: '120 MB',
    rating: 4.2,
    downloads: '18M+',
    tags: ['vagrant', 'virtualization', 'development', 'environment'],
    imageUrl: '/src/assets/app-icons/devops/vagrant.png'
  },
  'jenkins': {
    displayName: 'Jenkins',
    description: 'Open source automation server for building and deploying applications',
    developer: 'Jenkins Project',
    version: '2.440.1',
    size: '300 MB',
    rating: 4.3,
    downloads: '35M+',
    tags: ['ci-cd', 'automation', 'build', 'deployment'],
    imageUrl: '/src/assets/app-icons/devops/jenkins.png'
  },
  'awscli': {
    displayName: 'AWS CLI',
    description: 'Command line interface for Amazon Web Services',
    developer: 'Amazon',
    version: '2.15.0',
    size: '125 MB',
    rating: 4.4,
    downloads: '50M+',
    tags: ['aws', 'cloud', 'cli', 'amazon'],
    imageUrl: '/src/assets/app-icons/devops/awscli.png'
  },
  'azurecli': {
    displayName: 'Azure CLI',
    description: 'Command line tools for Microsoft Azure cloud services',
    developer: 'Microsoft',
    version: '2.56.0',
    size: '150 MB',
    rating: 4.3,
    downloads: '20M+',
    tags: ['azure', 'cloud', 'cli', 'microsoft'],
    imageUrl: '/src/assets/app-icons/devops/azurecli.png'
  },
  'gcloud': {
    displayName: 'Google Cloud SDK',
    description: 'Command line tools and libraries for Google Cloud Platform',
    developer: 'Google',
    version: '460.0.0',
    size: '180 MB',
    rating: 4.4,
    downloads: '30M+',
    tags: ['gcp', 'cloud', 'cli', 'google'],
    imageUrl: '/src/assets/app-icons/devops/gcloud.png'
  },
  'helm': {
    displayName: 'Helm',
    description: 'Package manager for Kubernetes with templated deployments',
    developer: 'CNCF',
    version: '3.14.0',
    size: '55 MB',
    rating: 4.5,
    downloads: '15M+',
    tags: ['kubernetes', 'package-manager', 'helm', 'charts'],
    imageUrl: '/src/assets/app-icons/devops/helm.png'
  },

  // === WEB DEVELOPMENT (10) ===
  'postman': {
    displayName: 'Postman',
    description: 'API development and testing platform with collaboration features',
    developer: 'Postman Inc.',
    version: '10.20.0',
    size: '140 MB',
    rating: 4.5,
    downloads: '30M+',
    tags: ['api', 'testing', 'development', 'http', 'rest'],
    imageUrl: '/src/assets/app-icons/web dev tools/postman.png'
  },
  'insomnia': {
    displayName: 'Insomnia',
    description: 'REST API client with GraphQL support and environment management',
    developer: 'Kong Inc.',
    version: '8.4.5',
    size: '120 MB',
    rating: 4.3,
    downloads: '8M+',
    tags: ['api', 'rest', 'graphql', 'testing', 'client'],
    imageUrl: '/src/assets/app-icons/web dev tools/insomnia.png'
  },
    'httpie': {
    displayName: 'HTTPie',
    description: 'Modern command line HTTP client with intuitive syntax',
    developer: 'HTTPie',
    version: '3.2.2',
    size: '25 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['http', 'cli', 'api', 'rest', 'command-line'],
    imageUrl: '/src/assets/app-icons/web dev tools/httpie.png'
  },
  'nginx': {
    displayName: 'Nginx',
    description: 'High-performance web server and reverse proxy',
    developer: 'Nginx Inc.',
    version: '1.25.3',
    size: '45 MB',
    rating: 4.7,
    downloads: '100M+',
    tags: ['web-server', 'proxy', 'load-balancer', 'nginx'],
    imageUrl: '/src/assets/app-icons/web dev tools/nginx.png'
  },
  'apache': {
    displayName: 'Apache HTTP Server',
    description: 'Open-source web server with modular architecture',
    developer: 'Apache Software Foundation',
    version: '2.4.58',
    size: '55 MB',
    rating: 4.5,
    downloads: '200M+',
    tags: ['web-server', 'apache', 'http', 'modular'],
    imageUrl: '/src/assets/app-icons/web dev tools/appache.png'
  },
  'nodejs-lts': {
    displayName: 'Node.js LTS',
    description: 'Long Term Support version of Node.js runtime for production',
    developer: 'Node.js Foundation',
    version: '20.10.0',
    size: '35 MB',
    rating: 4.8,
    downloads: '100M+',
    tags: ['javascript', 'runtime', 'lts', 'production'],
    imageUrl: '/src/assets/app-icons/web dev tools/nodejs-lts.png'
  },
  'yarn': {
    displayName: 'Yarn Package Manager',
    description: 'Fast, reliable, and secure dependency management for JavaScript',
    developer: 'Yarn',
    version: '1.22.21',
    size: '15 MB',
    rating: 4.3,
    downloads: '50M+',
    tags: ['javascript', 'package-manager', 'yarn', 'dependencies'],
    imageUrl: '/src/assets/app-icons/web dev tools/yarn.png'
  },
  'webpack': {
    displayName: 'Webpack',
    description: 'Module bundler for JavaScript applications with asset management',
    developer: 'Webpack',
    version: '5.89.0',
    size: '25 MB',
    rating: 4.2,
    downloads: '40M+',
    tags: ['bundler', 'javascript', 'webpack', 'build-tool'],
    imageUrl: '/src/assets/app-icons/web dev tools/webpack.png'
  },
  'parcel': {
    displayName: 'Parcel',
    description: 'Zero configuration build tool for web applications',
    developer: 'Parcel',
    version: '2.10.3',
    size: '30 MB',
    rating: 4.1,
    downloads: '5M+',
    tags: ['bundler', 'zero-config', 'build-tool', 'parcel'],
    imageUrl: '/src/assets/app-icons/web dev tools/parcel.png'
  },
  'vite': {
    displayName: 'Vite',
    description: 'Next generation frontend build tool with instant server start',
    developer: 'Vite Team',
    version: '5.0.10',
    size: '20 MB',
    rating: 4.6,
    downloads: '15M+',
    tags: ['build-tool', 'vite', 'fast', 'frontend'],
    imageUrl: '/src/assets/app-icons/web dev tools/vite.png'
  },

  // === COMMUNICATION (10) ===
  'discord': {
    displayName: 'Discord',
    description: 'Voice, video and text communication for gamers and communities',
    developer: 'Discord Inc.',
    version: '0.0.39',
    size: '95 MB',
    rating: 4.4,
    downloads: '500M+',
    tags: ['chat', 'voice', 'gaming', 'communities', 'discord'],
    imageUrl: '/src/assets/app-icons/comunication/discord.png'
  },
  'slack': {
    displayName: 'Slack',
    description: 'Team collaboration and messaging platform for businesses',
    developer: 'Slack Technologies',
    version: '4.35.126',
    size: '110 MB',
    rating: 4.3,
    downloads: '100M+',
    tags: ['team', 'collaboration', 'workspace', 'business'],
    imageUrl: '/src/assets/app-icons/comunication/slack.png'
  },
  'zoom': {
    displayName: 'Zoom',
    description: 'Video conferencing and online meetings platform',
    developer: 'Zoom Video Communications',
    version: '5.16.10',
    size: '80 MB',
    rating: 4.2,
    downloads: '1B+',
    tags: ['video', 'meetings', 'conference', 'zoom'],
    imageUrl: '/src/assets/app-icons/comunication/zoom.png'
  },
  'telegram': {
    displayName: 'Telegram Desktop',
    description: 'Fast and secure messaging app with cloud synchronization',
    developer: 'Telegram',
    version: '4.14.9',
    size: '45 MB',
    rating: 4.5,
    downloads: '1B+',
    tags: ['messaging', 'secure', 'fast', 'telegram'],
    imageUrl: '/src/assets/app-icons/comunication/telegram.png'
  },
  'signal': {
    displayName: 'Signal Desktop',
    description: 'Private messenger with end-to-end encryption and security focus',
    developer: 'Signal Foundation',
    version: '6.42.0',
    size: '140 MB',
    rating: 4.6,
    downloads: '50M+',
    tags: ['private', 'encryption', 'secure', 'messaging'],
    imageUrl: '/src/assets/app-icons/comunication/signal.png'
  },
  'skype': {
    displayName: 'Skype',
    description: 'Video calling and messaging service for personal communication',
    developer: 'Microsoft',
    version: '8.107.0',
    size: '165 MB',
    rating: 4.1,
    downloads: '1B+',
    tags: ['video-call', 'messaging', 'skype', 'microsoft'],
    imageUrl: '/src/assets/app-icons/comunication/skype.png'
  },
  'teams': {
    displayName: 'Microsoft Teams',
    description: 'Unified communication and collaboration platform for enterprises',
    developer: 'Microsoft',
    version: '1.6.00',
    size: '200 MB',
    rating: 4.2,
    downloads: '250M+',
    tags: ['teams', 'collaboration', 'microsoft', 'enterprise'],
    imageUrl: '/src/assets/app-icons/comunication/msteams.png'
  },
  'thunderbird': {
    displayName: 'Thunderbird',
    description: 'Free email application with calendar and address book',
    developer: 'Mozilla Foundation',
    version: '115.6.0',
    size: '180 MB',
    rating: 4.3,
    downloads: '30M+',
    tags: ['email', 'thunderbird', 'mozilla', 'calendar'],
    imageUrl: '/src/assets/app-icons/comunication/thuderbird.png'
  },
  'whatsapp': {
    displayName: 'WhatsApp Desktop',
    description: 'Desktop client for WhatsApp messaging with web sync',
    developer: 'Meta',
    version: '2.2346.52',
    size: '85 MB',
    rating: 4.0,
    downloads: '100M+',
    tags: ['whatsapp', 'messaging', 'desktop', 'meta'],
    imageUrl: '/src/assets/app-icons/comunication/whatsapp.png'
  },
  'element': {
    displayName: 'Element (Matrix)',
    description: 'Secure and decentralized messaging with Matrix protocol',
    developer: 'New Vector Ltd.',
    version: '1.11.50',
    size: '120 MB',
    rating: 4.2,
    downloads: '3M+',
    tags: ['matrix', 'secure', 'decentralized', 'encryption'],
    imageUrl: '/src/assets/app-icons/comunication/element.png'
  },

  // === GAMING (3) ===
  'steam': {
    displayName: 'Steam',
    description: 'Digital distribution platform for video games with community features',
    developer: 'Valve Corporation',
    version: '1.0.0.76',
    size: '200 MB',
    rating: 4.6,
    downloads: '1B+',
    tags: ['gaming', 'distribution', 'store', 'social', 'valve'],
    imageUrl: '/src/assets/app-icons/gaming/steam.png'
  },
  'lutris': {
    displayName: 'Lutris',
    description: 'Open gaming platform for Linux with Wine integration',
    developer: 'Lutris Team',
    version: '0.5.14',
    size: '25 MB',
    rating: 4.3,
    downloads: '2M+',
    tags: ['gaming', 'wine', 'emulation', 'linux'],
    imageUrl: '/src/assets/app-icons/gaming/lutris.png'
  },
  'minecraft': {
    displayName: 'Minecraft Launcher',
    description: 'Official launcher for Minecraft Java Edition with mod support',
    developer: 'Mojang Studios',
    version: '2.2.17',
    size: '150 MB',
    rating: 4.5,
    downloads: '200M+',
    tags: ['minecraft', 'launcher', 'gaming', 'sandbox'],
    imageUrl: '/src/assets/app-icons/gaming/minecraft.png'
  },

  // === MULTIMEDIA & GRAPHICS (12) ===
  'gimp': {
    displayName: 'GIMP',
    description: 'GNU Image Manipulation Program for advanced photo editing',
    developer: 'GIMP Team',
    version: '2.10.36',
    size: '280 MB',
    rating: 4.4,
    downloads: '50M+',
    tags: ['image-editing', 'graphics', 'photo', 'gnu'],
    imageUrl: '/src/assets/app-icons/multimedia/gimp.png'
  },
  'inkscape': {
    displayName: 'Inkscape',
    description: 'Professional vector graphics editor with SVG support',
    developer: 'Inkscape Project',
    version: '1.3.2',
    size: '220 MB',
    rating: 4.3,
    downloads: '25M+',
    tags: ['vector', 'graphics', 'svg', 'design'],
    imageUrl: '/src/assets/app-icons/multimedia/inkscape.png'
  },
  'blender': {
    displayName: 'Blender',
    description: '3D creation suite for modeling, animation, and rendering',
    developer: 'Blender Foundation',
    version: '4.0.2',
    size: '350 MB',
    rating: 4.7,
    downloads: '30M+',
    tags: ['3d', 'modeling', 'animation', 'rendering'],
    imageUrl: '/src/assets/app-icons/multimedia/blender.png'
  },
  'krita': {
    displayName: 'Krita',
    description: 'Digital painting and illustration application for artists',
    developer: 'KDE',
    version: '5.2.2',
    size: '180 MB',
    rating: 4.5,
    downloads: '15M+',
    tags: ['painting', 'digital-art', 'illustration', 'kde'],
    imageUrl: '/src/assets/app-icons/multimedia/krita.png'
  },
  'darktable': {
    displayName: 'darktable',
    description: 'Photography workflow application and RAW developer',
    developer: 'darktable Team',
    version: '4.6.0',
    size: '120 MB',
    rating: 4.2,
    downloads: '8M+',
    tags: ['photography', 'raw', 'workflow', 'editing'],
    imageUrl: '/src/assets/app-icons/multimedia/darktable.png'
  },
  'audacity': {
    displayName: 'Audacity',
    description: 'Free, open source audio editor and recording application',
    developer: 'Audacity Team',
    version: '3.4.2',
    size: '65 MB',
    rating: 4.3,
    downloads: '40M+',
    tags: ['audio', 'editing', 'recording', 'open-source'],
    imageUrl: '/src/assets/app-icons/multimedia/audacity.png'
  },
  'vlc': {
    displayName: 'VLC Media Player',
    description: 'Cross-platform multimedia player that plays most multimedia files',
    developer: 'VideoLAN',
    version: '3.0.20',
    size: '75 MB',
    rating: 4.6,
    downloads: '1B+',
    tags: ['media-player', 'video', 'audio', 'multimedia'],
    imageUrl: '/src/assets/app-icons/multimedia/vlc.png'
  },
  'spotify': {
    displayName: 'Spotify',
    description: 'Digital music service that gives you access to millions of songs',
    developer: 'Spotify Technology S.A.',
    version: '1.1.68.632',
    size: '100 MB',
    rating: 4.5,
    downloads: '1B+',
    tags: ['music', 'streaming', 'audio', 'media'],
    imageUrl: '/src/assets/app-icons/multimedia/spotify.png'
  },

  'mpv': {
    displayName: 'MPV',
    description: 'Free, open-source media player',
    developer: 'MPV Team',
    version: '0.34.1',
    size: '50 MB',
    rating: 4.5,
    downloads: '1B+',
    tags: ['music', 'streaming', 'audio', 'media'],
    imageUrl: '/src/assets/app-icons/multimedia/mpv.png'
  },



  'obs': {
    displayName: 'OBS Studio',
    description: 'Free and open source software for video recording and streaming',
    developer: 'OBS Project',
    version: '30.0.2',
    size: '95 MB',
    rating: 4.7,
    downloads: '100M+',
    tags: ['streaming', 'recording', 'video', 'broadcast'],
    imageUrl: '/src/assets/app-icons/multimedia/obs.png'
  },
  'kdenlive': {
    displayName: 'Kdenlive',
    description: 'Free and open source video editing software',
    developer: 'KDE',
    version: '23.08.4',
    size: '180 MB',
    rating: 4.4,
    downloads: '12M+',
    tags: ['video-editing', 'kde', 'multimedia', 'editing'],
    imageUrl: '/src/assets/app-icons/multimedia/kdenlive.png'
  },
  // 'openshot': {
  //   displayName: 'OpenShot Video Editor',
  //   description: 'Award-winning free and open-source video editor',
  //   developer: 'OpenShot Studios',
  //   version: '3.1.1',
  //   size: '120 MB',
  //   rating: 4.1,
  //   downloads: '8M+',
  //   tags: ['video-editing', 'open-source', 'simple', 'editing'],
  //   imageUrl: '/src/assets/app-icons/multimedia/openshot.png'
  // },
  'handbrake': {
    displayName: 'HandBrake',
    description: 'Open source video transcoder for converting video formats',
    developer: 'HandBrake Team',
    version: '1.7.3',
    size: '55 MB',
    rating: 4.5,
    downloads: '25M+',
    tags: ['video-converter', 'transcoder', 'encoding', 'compression'],
    imageUrl: '/src/assets/app-icons/multimedia/handbrake.png'
  },
  // 'shotcut': {
  //   displayName: 'Shotcut',
  //   description: 'Free, open source, cross-platform video editor',
  //   developer: 'Meltytech',
  //   version: '23.12.15',
  //   size: '140 MB',
  //   rating: 4.2,
  //   downloads: '10M+',
  //   tags: ['video-editing', 'cross-platform', 'free', 'editor'],
  //   imageUrl: '/src/assets/app-icons/multimedia/shotcut.png'
  // },

  // === OFFICE & PRODUCTIVITY (8) ===
  'libreoffice': {
    displayName: 'LibreOffice',
    description: 'Free and open source office suite with Writer, Calc, Impress',
    developer: 'The Document Foundation',
    version: '7.6.4',
    size: '300 MB',
    rating: 4.4,
    downloads: '200M+',
    tags: ['office', 'writer', 'calc', 'presentation', 'documents'],
    imageUrl: '/src/assets/app-icons/office/libreoffice.png'
  },
  'onlyoffice': {
    displayName: 'ONLYOFFICE',
    description: 'Comprehensive office suite with document, spreadsheet, and presentation editors',
    developer: 'Ascensio System SIA',
    version: '7.5.1',
    size: '250 MB',
    rating: 4.2,
    downloads: '15M+',
    tags: ['office', 'documents', 'collaboration', 'productivity'],
    imageUrl: '/src/assets/app-icons/office/onlyoffice.png'
  },
  'notion': {
    displayName: 'Notion',
    description: 'All-in-one workspace for notes, tasks, wikis, and databases',
    developer: 'Notion Labs',
    version: '2.0.30',
    size: '120 MB',
    rating: 4.5,
    downloads: '50M+',
    tags: ['notes', 'productivity', 'workspace', 'collaboration'],
    imageUrl: '/src/assets/app-icons/office/notion.png'
  },
  'obsidian': {
    displayName: 'Obsidian',
    description: 'Knowledge management app with linked note-taking and graph view',
    developer: 'Obsidian',
    version: '1.5.3',
    size: '85 MB',
    rating: 4.6,
    downloads: '5M+',
    tags: ['notes', 'knowledge-management', 'markdown', 'linking'],
    imageUrl: '/src/assets/app-icons/office/obsidian.png'
  },
  'joplin': {
    displayName: 'Joplin',
    description: 'Open source note taking and to-do application with synchronization',
    developer: 'Laurent Cozic',
    version: '2.13.15',
    size: '150 MB',
    rating: 4.3,
    downloads: '3M+',
    tags: ['notes', 'todo', 'markdown', 'sync', 'open-source'],
    imageUrl: '/src/assets/app-icons/office/joplin.png'
  },
  'typora': {
    displayName: 'Typora',
    description: 'Minimal markdown editor with live preview and seamless experience',
    developer: 'Typora',
    version: '1.8.10',
    size: '65 MB',
    rating: 4.7,
    downloads: '8M+',
    tags: ['markdown', 'editor', 'writing', 'minimal'],
    imageUrl: '/src/assets/app-icons/office/typora.png'
  },
  'calligra': {
    displayName: 'Calligra',
    description: 'Office suite with word processing, spreadsheets, and presentations',
    developer: 'KDE',
    version: '3.2.0',
    size: '250 MB',
    rating: 4.1,
    downloads: '500K+',
    tags: ['office', 'word-processing', 'spreadsheets', 'presentations'],
    imageUrl: '/src/assets/app-icons/office/calligra.png'
  },
  // 'marktext': {
  //   displayName: 'Mark Text',
  //   description: 'Real-time preview markdown editor with focus mode',
  //   developer: 'Mark Text',
  //   version: '0.17.1',
  //   size: '180 MB',
  //   rating: 4.2,
  //   downloads: '2M+',
  //   tags: ['markdown', 'editor', 'preview', 'writing'],
  //   imageUrl: 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
    'evolution': {
    displayName: 'Evolution',
    description: 'Personal information management application with email, calendar, and task integration',
    developer: 'GNOME',
    version: '3.42.0',
    size: '150 MB',
    rating: 4.1,
    downloads: '500K+',
    tags: ['office', 'word-processing', 'spreadsheets', 'presentations'],
    imageUrl: '/src/assets/app-icons/office/evolution.png'
  },
    'cherrytree': {
    displayName: 'CherryTree',
    description: 'Hierarchical note-taking application with rich text and syntax highlighting',
    developer: 'Giovanni Bassi',
    version: '0.99.38',
    size: '80 MB',
    rating: 4.1,
    downloads: '500K+',
    tags: ['office', 'word-processing', 'spreadsheets', 'presentations'],
    imageUrl: '/src/assets/app-icons/office/cherrytree.png'
  },
    'zim': {
    displayName: 'Zim',
    description: 'Desktop wiki for organizing notes and tasks',
    developer: 'Zim Team',
    version: '0.74',
    size: '100 MB',
    rating: 4.1,
    downloads: '500K+',
    tags: ['office', 'word-processing', 'spreadsheets', 'presentations'],
    imageUrl: '/src/assets/app-icons/office/zim.png'
  },
    'toggl': {
    displayName: 'Toggl',
    description: 'Time tracking application for teams and freelancers',
    developer: 'Toggl',
    version: '7.4.0',
    size: '50 MB',
    rating: 4.1,
    downloads: '500K+',
    tags: ['office', 'word-processing', 'spreadsheets', 'presentations'],
    imageUrl: '/src/assets/app-icons/office/toggl.png'
  },
    'todoist': {
    displayName: 'Todoist',
    description: 'Task management application for personal and team productivity',
    developer: 'Doist',
    version: '7.4.0',
    size: '50 MB',
    rating: 4.1,
    downloads: '500K+',
    tags: ['office', 'word-processing', 'spreadsheets', 'presentations'],
    imageUrl: '/src/assets/app-icons/office/todolist.png'
  },
  // === TERMINAL & SHELL (6) ===
  'ohmyzsh': {
    displayName: 'Oh My Zsh',
    description: 'Framework for managing Zsh configuration',
    developer: 'Oh My Zsh Team',
    version: '1.0.0',
    size: '5 MB',
    rating: 4.5,
    downloads: '3M+',
    tags: ['terminal', 'fast', 'rust', 'cross-platform'],
    imageUrl: '/src/assets/app-icons/terminal/ohmyzsh.png'
  },
  'kitty': {
    displayName: 'Kitty',
    description: 'GPU-accelerated terminal emulator with advanced features',
    developer: 'Kovid Goyal',
    version: '0.32.1',
    size: '35 MB',
    rating: 4.4,
    downloads: '2M+',
    tags: ['terminal', 'gpu-accelerated', 'advanced', 'fast'],
    imageUrl: '/src/assets/app-icons/terminal/kitty.png'
  },
  'screen': {
    displayName: 'Screen',
    description: 'Terminal multiplexer that allows for multiple sessions within a single terminal window',
    developer: 'Screen Team',
    version: '4.8.0',
    size: '1 MB',
    rating: 4.3,
    downloads: '1M+',
    tags: ['terminal', 'gpu-accelerated', 'multiplexer', 'lua'],
    imageUrl: '/src/assets/app-icons/terminal/screen.png'
  },
  'tmux': {
    displayName: 'tmux',
    description: 'Terminal multiplexer for managing multiple terminal sessions',
    developer: 'tmux Team',
    version: '3.4',
    size: '8 MB',
    rating: 4.6,
    downloads: '10M+',
    tags: ['terminal', 'multiplexer', 'sessions', 'productivity'],
    imageUrl: '/src/assets/app-icons/terminal/tmux.png'
  },
  'zsh': {
    displayName: 'Zsh Shell',
    description: 'Extended shell with improved features and customization',
    developer: 'Zsh Development Team',
    version: '5.9',
    size: '12 MB',
    rating: 4.5,
    downloads: '15M+',
    tags: ['shell', 'zsh', 'customization', 'productivity'],
    imageUrl: '/src/assets/app-icons/terminal/zsh.png'
  },
  'fish': {
    displayName: 'Fish Shell',
    description: 'User-friendly command line shell with smart autocompletion',
    developer: 'Fish Shell Team',
    version: '3.7.0',
    size: '15 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['shell', 'fish', 'autocompletion', 'user-friendly'],
    imageUrl: '/src/assets/app-icons/terminal/fishshell.png'
  },
  'tilix': {
    displayName: 'Tilix',
    description: 'Advanced terminal emulator designed for power users',
    developer: 'Tilix Team',
    version: '1.9.3',
    size: '2 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['shell', 'fish', 'autocompletion', 'user-friendly'],
    imageUrl: '/src/assets/app-icons/terminal/tilix.png'
  },
  'terminator': {
    displayName: 'Terminator',
    description: 'Advanced terminal emulator designed for power users',
    developer: 'Terminator Team',
    version: '1.9.3',
    size: '2 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['shell', 'fish', 'autocompletion', 'user-friendly'],
    imageUrl: '/src/assets/app-icons/terminal/terminator.png'
  },
  // 'terminator': {
  //   displayName: 'Terminator',
  //   description: 'Advanced terminal emulator designed for power users',
  //   developer: 'Terminator Team',
  //   version: '1.9.3',
  //   size: '2 MB',
  //   rating: 4.4,
  //   downloads: '5M+',
  //   tags: ['shell', 'fish', 'autocompletion', 'user-friendly'],
  //   imageUrl: '/src/assets/app-icons/terminal/terminator.png'
  // },
  'terminator': {
    displayName: 'Terminator',
    description: 'Advanced terminal emulator designed for power users',
    developer: 'Terminator Team',
    version: '1.9.3',
    size: '2 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['shell', 'fish', 'autocompletion', 'user-friendly'],
    imageUrl: '/src/assets/app-icons/terminal/terminator.png'
  },
  'fzf': {
    displayName: 'fzf',
    description: 'Command-line fuzzy finder',
    developer: 'junegunn',
    version: '0.27.2',
    size: '1 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['shell', 'fish', 'autocompletion', 'user-friendly'],
    imageUrl: '/src/assets/app-icons/terminal/fzf.png'
  },
  'bat': {
    displayName: 'bat',
    description: 'Cat clone with syntax highlighting and Git integration',
    developer: 'sharkdp',
    version: '0.18.0',
    size: '5 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['shell', 'fish', 'autocompletion', 'user-friendly'],
    imageUrl: '/src/assets/app-icons/terminal/bat.png'
  },
  'htop': {
    displayName: 'htop',
    description: 'Interactive process viewer and system monitor',
    developer: 'htop Team',
    version: '3.3.0',
    size: '5 MB',
    rating: 4.4,
    downloads: '5M+',
    tags: ['shell', 'fish', 'autocompletion', 'user-friendly'],
    imageUrl: '/src/assets/app-icons/terminal/htop.png'
  },
    'neofetch': {
    displayName: 'Neofetch',
    description: 'System information tool written in bash',
    developer: 'Dylan Araps',
    version: '7.1.0',
    size: '2 MB',
    rating: 4.5,
    downloads: '5M+',
    tags: ['system-info', 'bash', 'terminal', 'ascii'],
    imageUrl: '/src/assets/app-icons/terminal/neofetch.png'
  },
  



  // === SYSTEM UTILITIES (15) ===
  // 'htop': {
  //   displayName: 'htop',
  //   description: 'Interactive process viewer and system monitor',
  //   developer: 'htop Team',
  //   version: '3.3.0',
  //   size: '5 MB',
  //   rating: 4.7,
  //   downloads: '20M+',
  //   tags: ['system-monitor', 'processes', 'htop', 'performance'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },

  'gparted': {
    displayName: 'GParted',
    description: 'GNOME partition editor for managing disk partitions',
    developer: 'GParted Team',
    version: '1.5.0',
    size: '25 MB',
    rating: 4.6,
    downloads: '10M+',
    tags: ['partition', 'disk', 'gparted', 'gnome'],
    imageUrl: '/src/assets/app-icons/systemutils/gparted.png'
  },
  'timeshift': {
    displayName: 'Timeshift',
    description: 'System restore utility for Linux with snapshot management',
    developer: 'Tony George',
    version: '23.07.1',
    size: '18 MB',
    rating: 4.5,
    downloads: '3M+',
    tags: ['backup', 'restore', 'snapshots', 'system'],
    imageUrl: '/src/assets/app-icons/systemutils/timeshift.png'
  },
  'bleachbit': {
    displayName: 'BleachBit',
    description: 'System cleaner to free disk space and maintain privacy',
    developer: 'Andrew Ziem',
    version: '4.6.0',
    size: '12 MB',
    rating: 4.3,
    downloads: '8M+',
    tags: ['cleaner', 'privacy', 'disk-space', 'maintenance'],
    imageUrl: '/src/assets/app-icons/systemutils/bleachbit.png'
  },
  'stacer': {
    displayName: 'Stacer',
    description: 'Linux system optimizer and monitoring tool',
    developer: 'Oğuzhan İğrek',
    version: '1.1.0',
    size: '40 MB',
    rating: 4.2,
    downloads: '2M+',
    tags: ['optimizer', 'monitoring', 'system', 'performance'],
    imageUrl: '/src/assets/app-icons/systemutils/stacer.png'
  },
  'cpu-x': {
    displayName: 'CPU-X',
    description: 'System profiler and hardware information tool',
    developer: 'X0rg',
    version: '5.0.2',
    size: '8 MB',
    rating: 4.1,
    downloads: '1M+',
    tags: ['hardware', 'cpu', 'system-info', 'profiler'],
    imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  'baobab': {
    displayName: 'Baobab (Disk Usage Analyzer)',
    description: 'GNOME disk usage analyzer with graphical tree map',
    developer: 'GNOME Project',
    version: '45.0',
    size: '15 MB',
    rating: 4.2,
    downloads: '5M+',
    tags: ['disk-usage', 'analyzer', 'gnome', 'storage'],
    imageUrl: '/src/assets/app-icons/systemutils/baobab.png'
  },
  'curl': {
    displayName: 'Curl',
    description: 'Command-line tool for transferring data with URLs',
    developer: 'Daniel Stenberg',
    version: '7.79.1',
    size: '2 MB',
    rating: 4.2,
    downloads: '5M+',
    tags: ['network', 'command-line', 'transfer', 'data'],
    imageUrl: '/src/assets/app-icons/systemutils/curl.png'
  },
  'wget': {
    displayName: 'Wget',
    description: 'Command-line tool for downloading files from the web',
    developer: 'GNU Project',
    version: '1.21.1',
    size: '3 MB',
    rating: 4.2,
    downloads: '5M+',
    tags: ['network', 'command-line', 'transfer', 'data'],
    imageUrl: '/src/assets/app-icons/systemutils/wget.png'
  },
  'synaptic': {
    displayName: 'Synaptic',
    description: 'Graphical package manager for APT',
    developer: 'Synaptic Team',
    version: '0.84.6',
    size: '5 MB',
    rating: 4.2,
    downloads: '5M+',
    tags: ['network', 'command-line', 'transfer', 'data'],
    imageUrl: '/src/assets/app-icons/systemutils/synaptic.png'
  },
  'gnome-tweaks': {
    displayName: 'GNOME Tweaks',
    description: 'Advanced settings for GNOME desktop environment',
    developer: 'GNOME Project',
    version: '45.0',
    size: '4 MB',
    rating: 4.2,
    downloads: '5M+',
    tags: ['network', 'command-line', 'transfer', 'data'],
    imageUrl: '/src/assets/app-icons/systemutils/gnome-tweaks.png'
  },
   'tree': {
    displayName: 'Tree',
    description: 'Recursive directory listing command',
    developer: 'Steve Baker',
    version: '2.0.0',
    size: '1 MB',
    rating: 4.2,
    downloads: '5M+',
    tags: ['network', 'command-line', 'transfer', 'data'],
    imageUrl: '/src/assets/app-icons/systemutils/tree.png'
  },
  
  
  
  
  // 'ncdu': {
  //   displayName: 'ncdu',
  //   description: 'NCurses disk usage analyzer for the terminal',
  //   developer: 'Yoran Heling',
  //   version: '2.3',
  //   size: '3 MB',
  //   rating: 4.4,
  //   downloads: '3M+',
  //   tags: ['disk-usage', 'ncurses', 'terminal', 'analyzer'],
  //   imageUrl: 'https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwY29tbWFuZCUyMGxpbmV8ZW58MXx8fHwxNzU2MTA4OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'dconf-editor': {
  //   displayName: 'dconf Editor',
  //   description: 'Low-level configuration system editor for GNOME',
  //   developer: 'GNOME Project',
  //   version: '45.0.1',
  //   size: '8 MB',
  //   rating: 4.0,
  //   downloads: '2M+',
  //   tags: ['configuration', 'dconf', 'gnome', 'settings'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'flameshot': {
  //   displayName: 'Flameshot',
  //   description: 'Powerful screenshot tool with annotation features',
  //   developer: 'Flameshot Project',
  //   version: '12.1.0',
  //   size: '22 MB',
  //   rating: 4.6,
  //   downloads: '8M+',
  //   tags: ['screenshot', 'annotation', 'capture', 'editing'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'spectacle': {
  //   displayName: 'Spectacle',
  //   description: 'KDE screenshot capture utility with editing capabilities',
  //   developer: 'KDE',
  //   version: '23.08.4',
  //   size: '18 MB',
  //   rating: 4.3,
  //   downloads: '5M+',
  //   tags: ['screenshot', 'kde', 'capture', 'editing'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'kazam': {
  //   displayName: 'Kazam',
  //   description: 'Simple screen recording program with multiple format support',
  //   developer: 'Launchpad',
  //   version: '1.4.5',
  //   size: '12 MB',
  //   rating: 4.1,
  //   downloads: '3M+',
  //   tags: ['screen-recording', 'video', 'capture', 'simple'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'simplescreenrecorder': {
  //   displayName: 'SimpleScreenRecorder',
  //   description: 'Feature-rich screen recorder for Linux with live streaming',
  //   developer: 'Maarten Baert',
  //   version: '0.4.4',
  //   size: '28 MB',
  //   rating: 4.4,
  //   downloads: '4M+',
  //   tags: ['screen-recording', 'streaming', 'video', 'capture'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'conky': {
  //   displayName: 'Conky',
  //   description: 'Light-weight system monitor for X with highly customizable display',
  //   developer: 'Conky Team',
  //   version: '1.19.6',
  //   size: '15 MB',
  //   rating: 4.2,
  //   downloads: '2M+',
  //   tags: ['system-monitor', 'desktop', 'customizable', 'lightweight'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },

  // === FILE MANAGEMENT (8) ===
  'dolphin': {
    displayName: 'Dolphin',
    description: 'KDE file manager with advanced features and customization',
    developer: 'KDE',
    version: '23.08.4',
    size: '45 MB',
    rating: 4.5,
    downloads: '15M+',
    tags: ['file-manager', 'kde', 'advanced', 'customizable'],
    imageUrl: '/src/assets/app-icons/filemanagement/dolphin.png'
  },
  'nautilus': {
    displayName: 'Nautilus (Files)',
    description: 'GNOME default file manager with clean interface',
    developer: 'GNOME Project',
    version: '45.2.1',
    size: '35 MB',
    rating: 4.3,
    downloads: '100M+',
    tags: ['file-manager', 'gnome', 'default', 'clean'],
    imageUrl: '/src/assets/app-icons/filemanagement/nautilus.png'
  },
  'thunar': {
    displayName: 'Thunar',
    description: 'Xfce file manager designed to be fast and easy to use',
    developer: 'Xfce Team',
    version: '4.18.8',
    size: '25 MB',
    rating: 4.2,
    downloads: '10M+',
    tags: ['file-manager', 'xfce', 'fast', 'lightweight'],
    imageUrl: '/src/assets/app-icons/filemanagement/thunar.png'
  },
  'ranger': {
    displayName: 'Ranger',
    description: 'Console file manager with VI key bindings and preview',
    developer: 'Roman Zimbelmann',
    version: '1.9.3',
    size: '8 MB',
    rating: 4.4,
    downloads: '2M+',
    tags: ['file-manager', 'console', 'vi-keys', 'preview'],
    imageUrl: '/src/assets/app-icons/filemanagement/ranger.png'
  },
  'midnight-commander': {
    displayName: 'Midnight Commander',
    description: 'Orthodox file manager with two-panel interface',
    developer: 'MC Team',
    version: '4.8.30',
    size: '12 MB',
    rating: 4.3,
    downloads: '5M+',
    tags: ['file-manager', 'orthodox', 'two-panel', 'mc'],
    imageUrl: '/src/assets/app-icons/filemanagement/midnight-commander.png'
  },

    'mc': {
    displayName: 'Midnight Commander',
    description: 'Orthodox file manager with two-panel interface',
    developer: 'MC Team',
    version: '4.8.30',
    size: '12 MB',
    rating: 4.3,
    downloads: '5M+',
    tags: ['file-manager', 'orthodox', 'two-panel', 'mc'],
    imageUrl: '/src/assets/app-icons/filemanagement/midnight-commander.png'
  },
    'filezilla': {
    displayName: 'FileZilla',
    description: 'Cross-platform FTP client with a user-friendly interface',
    developer: 'FileZilla Team',
    version: '3.63.0',
    size: '10 MB',
    rating: 4.3,
    downloads: '5M+',
    tags: ['file-manager', 'ftp', 'cross-platform', 'client'],
    imageUrl: '/src/assets/app-icons/filemanagement/filezilla.png'
  },

    'p7zip': {
    displayName: 'p7zip',
    description: 'Command-line version of 7-Zip for Unix',
    developer: 'p7zip Team',
    version: '17.0.0',
    size: '2 MB',
    rating: 4.3,
    downloads: '5M+',
    tags: ['file-manager', 'compression', 'command-line', 'unix'],
    imageUrl: '/src/assets/app-icons/filemanagement/p7zip.png'
  },
    'ark': {
    displayName: 'Ark',
    description: 'File archiver for KDE with a user-friendly interface',
    developer: 'KDE',
    version: '23.08.4',
    size: '45 MB',
    rating: 4.3,
    downloads: '5M+',
    tags: ['file-manager', 'compression', 'command-line', 'unix'],
    imageUrl: '/src/assets/app-icons/filemanagement/ark.png'
  },
  // 'nemo': {
  //   displayName: 'Nemo',
  //   description: 'Cinnamon file manager forked from Nautilus',
  //   developer: 'Linux Mint',
  //   version: '6.0.2',
  //   size: '30 MB',
  //   rating: 4.4,
  //   downloads: '8M+',
  //   tags: ['file-manager', 'cinnamon', 'mint', 'nautilus-fork'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'pcmanfm': {
  //   displayName: 'PCManFM',
  //   description: 'Lightweight file manager for LXDE desktop environment',
  //   developer: 'LXDE Team',
  //   version: '1.3.2',
  //   size: '18 MB',
  //   rating: 4.1,
  //   downloads: '6M+',
  //   tags: ['file-manager', 'lightweight', 'lxde', 'simple'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'double-commander': {
  //   displayName: 'Double Commander',
  //   description: 'Cross platform open source file manager with dual-pane interface',
  //   developer: 'Alexander Koblov',
  //   version: '1.1.0',
  //   size: '55 MB',
  //   rating: 4.2,
  //   downloads: '3M+',
  //   tags: ['file-manager', 'dual-pane', 'cross-platform', 'open-source'],
  //   imageUrl: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  // },

  // === SECURITY & PRIVACY (6) ===
  'keepassxc': {
    displayName: 'KeePassXC',
    description: 'Cross-platform password manager with strong encryption',
    developer: 'KeePassXC Team',
    version: '2.7.6',
    size: '85 MB',
    rating: 4.7,
    downloads: '10M+',
    tags: ['password-manager', 'encryption', 'security', 'cross-platform'],
    imageUrl: '/src/assets/app-icons/security/keepassxc.png'
  },
  'bitwarden': {
    displayName: 'Bitwarden',
    description: 'Open source password manager with cloud synchronization',
    developer: 'Bitwarden Inc.',
    version: '2023.12.0',
    size: '150 MB',
    rating: 4.6,
    downloads: '5M+',
    tags: ['password-manager', 'cloud-sync', 'open-source', 'security'],
    imageUrl: '/src/assets/app-icons/security/bitwarden.png'
  },
  // 'veracrypt': {
  //   displayName: 'VeraCrypt',
  //   description: 'Disk encryption software for creating encrypted volumes',
  //   developer: 'IDRIX',
  //   version: '1.26.7',
  //   size: '45 MB',
  //   rating: 4.5,
  //   downloads: '8M+',
  //   tags: ['encryption', 'disk', 'security', 'privacy'],
  //   imageUrl: 'https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwY29tbWFuZCUyMGxpbmV8ZW58MXx8fHwxNzU2MTA4OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'tor': {
  //   displayName: 'Tor Browser',
  //   description: 'Privacy-focused web browser for anonymous internet browsing',
  //   developer: 'The Tor Project',
  //   version: '13.0.8',
  //   size: '120 MB',
  //   rating: 4.3,
  //   downloads: '15M+',
  //   tags: ['privacy', 'anonymous', 'tor', 'security'],
  //   imageUrl: 'https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwY29tbWFuZCUyMGxpbmV8ZW58MXx8fHwxNzU2MTA4OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  'clamav': {
    displayName: 'ClamAV',
    description: 'Open source antivirus engine for detecting malware',
    developer: 'Cisco Talos',
    version: '1.3.0',
    size: '35 MB',
    rating: 4.1,
    downloads: '5M+',
    tags: ['antivirus', 'malware', 'security', 'scanning'],
    imageUrl: '/src/assets/app-icons/security/clamav.png'
  },

    'openvpn': {
    displayName: 'OpenVPN',
    description: 'Open source VPN software for secure internet access',
    developer: 'OpenVPN Technologies Inc.',
    version: '2.5.6',
    size: '30 MB',
    rating: 4.1,
    downloads: '5M+',
    tags: ['vpn', 'security', 'network'],
    imageUrl: '/src/assets/app-icons/security/openvpn.png'
  },
  'wireguard': {
    displayName: 'WireGuard',
    description: 'Next generation VPN that is fast, simple, and secure',
    developer: 'WireGuard Development Team',
    version: '1.0.20210914',
    size: '10 MB',
    rating: 4.1,
    downloads: '5M+',
    tags: ['vpn', 'security', 'network'],
    imageUrl: '/src/assets/app-icons/security/wireguard.png'
  },
  // 'gufw': {
  //   displayName: 'GUFW',
  //   description: 'Graphical uncomplicated firewall management tool',
  //   developer: 'Costales',
  //   version: '22.3.0',
  //   size: '8 MB',
  //   rating: 4.0,
  //   downloads: '3M+',
  //   tags: ['firewall', 'security', 'ufw', 'network'],
  //   imageUrl: 'https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwY29tbWFuZCUyMGxpbmV8ZW58MXx8fHwxNzU2MTA4OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  // },

  // === VIRTUALIZATION (4) ===
  'virtualbox': {
    displayName: 'VirtualBox',
    description: 'Cross-platform virtualization software for running multiple OS',
    developer: 'Oracle Corporation',
    version: '7.0.12',
    size: '180 MB',
    rating: 4.4,
    downloads: '50M+',
    tags: ['virtualization', 'vm', 'oracle', 'cross-platform'],
    imageUrl: '/src/assets/app-icons/virtualization/virtualbox.png'
  },
  'qemu': {
    displayName: 'QEMU',
    description: 'Generic and open source machine emulator and virtualizer',
    developer: 'QEMU Team',
    version: '8.2.0',
    size: '120 MB',
    rating: 4.2,
    downloads: '10M+',
    tags: ['virtualization', 'emulator', 'kvm', 'open-source'],
    imageUrl: '/src/assets/app-icons/virtualization/qemu.png'
  },
  'gnome-boxes': {
    displayName: 'GNOME Boxes',
    description: 'Simple virtualization application for managing virtual machines',
    developer: 'GNOME Project',
    version: '41.0',
    size: '80 MB',
    rating: 4.2,
    downloads: '10M+',
    tags: ['virtualization', 'emulator', 'kvm', 'open-source'],
    imageUrl: '/src/assets/app-icons/virtualization/gnome-boxes.png'
  },
  // 'virt-manager': {
  //   displayName: 'Virtual Machine Manager',
  //   description: 'Desktop application for managing KVM virtual machines',
  //   developer: 'Red Hat',
  //   version: '4.1.0',
  //   size: '25 MB',
  //   rating: 4.3,
  //   downloads: '5M+',
  //   tags: ['virtualization', 'kvm', 'management', 'libvirt'],
  //   imageUrl: 'https://images.unsplash.com/photo-1578575778986-380b94467767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkb2NrZXIlMjBjb250YWluZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjA0NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  // 'bottles': {
  //   displayName: 'Bottles',
  //   description: 'Run Windows software on Linux using Wine with easy management',
  //   developer: 'Bottles Contributors',
  //   version: '51.9',
  //   size: '55 MB',
  //   rating: 4.1,
  //   downloads: '2M+',
  //   tags: ['wine', 'windows', 'compatibility', 'gaming'],
  //   imageUrl: 'https://images.unsplash.com/photo-1578575778986-380b94467767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkb2NrZXIlMjBjb250YWluZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjA0NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080'
  // },

  // === BUILD TOOLS (6) ===
  'make': {
    displayName: 'GNU Make',
    description: 'Build automation tool that automatically builds executable programs',
    developer: 'GNU Project',
    version: '4.4.1',
    size: '8 MB',
    rating: 4.5,
    downloads: '100M+',
    tags: ['build-tool', 'make', 'automation', 'gnu'],
    imageUrl: '/src/assets/app-icons/build tools/gnu-make.png'
  },
  'cmake': {
    displayName: 'CMake',
    description: 'Cross-platform build system generator for C/C++ projects',
    developer: 'Kitware',
    version: '3.28.1',
    size: '45 MB',
    rating: 4.3,
    downloads: '25M+',
    tags: ['build-system', 'cmake', 'cross-platform', 'c++'],
    imageUrl: '/src/assets/app-icons/build tools/cmake.png'
  },
  // 'autotools': {
  //   displayName: 'GNU Autotools',
  //   description: 'Suite of programming tools for creating portable build systems',
  //   developer: 'GNU Project',
  //   version: '2.71',
  //   size: '25 MB',
  //   rating: 4.1,
  //   downloads: '15M+',
  //   tags: ['autotools', 'autoconf', 'automake', 'build-system'],
  //   imageUrl: 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  // },
  'ninja': {
    displayName: 'Ninja Build',
    description: 'Small build system with a focus on speed',
    developer: 'Ninja Team',
    version: '1.11.1',
    size: '3 MB',
    rating: 4.4,
    downloads: '20M+',
    tags: ['build-system', 'ninja', 'fast', 'speed'],
    imageUrl: '/src/assets/app-icons/build tools/ninja.png'
  },
  'meson': {
    displayName: 'Meson Build',
    description: 'Open source build system meant to be extremely fast and user friendly',
    developer: 'Meson Team',
    version: '1.3.1',
    size: '12 MB',
    rating: 4.2,
    downloads: '8M+',
    tags: ['build-system', 'meson', 'fast', 'python'],
    imageUrl: 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  // 'bazel': {
  //   displayName: 'Bazel',
  //   description: 'Fast, scalable, multi-language and extensible build tool',
  //   developer: 'Google',
  //   version: '7.0.0',
  //   size: '85 MB',
  //   rating: 4.0,
  //   downloads: '3M+',
  //   tags: ['build-tool', 'bazel', 'scalable', 'google'],
  //   imageUrl: 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  // }

    'gradle': {
    displayName: 'Gradle',
    description: 'Powerful build automation tool for Java projects',
    developer: 'Gradle Inc.',
    version: '7.4.2',
    size: '100 MB',
    rating: 4.2,
    downloads: '8M+',
    tags: ['build-system', 'gradle', 'java', 'automation'],
    imageUrl: '/src/assets/app-icons/build tools/gradle.png'
  },

    'meson': {
    displayName: 'Meson Build',
    description: 'Open source build system meant to be extremely fast and user friendly',
    developer: 'Meson Team',
    version: '1.3.1',
    size: '12 MB',
    rating: 4.2,
    downloads: '8M+',
    tags: ['build-system', 'meson', 'fast', 'python'],
    imageUrl: '/src/assets/app-icons/build tools/meson.png'
  },
    'maven': {
    displayName: 'Maven',
    description: 'Build automation tool primarily for Java projects',
    developer: 'Apache Software Foundation',
    version: '3.8.4',
    size: '10 MB',
    rating: 4.2,
    downloads: '8M+',
    tags: ['build-system', 'maven', 'java', 'automation'],
    imageUrl: '/src/assets/app-icons/build tools/maven.png'
  },
};

