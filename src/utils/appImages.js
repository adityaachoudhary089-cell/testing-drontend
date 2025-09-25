// Specific images for popular apps
const specificImages = {
  // Web Browsers
  'chrome': 'https://images.unsplash.com/photo-1668853907314-e93ecf0526bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBjaHJvbWUlMjBicm93c2VyfGVufDF8fHx8MTc1NjEwODk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
  'firefox': 'https://images.unsplash.com/photo-1510772314292-9c0ad420734a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlZm94JTIwbW96aWxsYSUyMGJyb3dzZXJ8ZW58MXx8fHwxNzU2MTA4OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  // IDEs & Code Editors
  'vscode': 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  // DevOps & Containers
  'docker': 'https://images.unsplash.com/photo-1578575778986-380b94467767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2NrZXIlMjBjb250YWluZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjA0NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  // Communication
  'discord': 'https://images.unsplash.com/photo-1603899122332-81418ddc0e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNjb3JkJTIwYXBwJTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NTYxMDg5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  // Multimedia & Graphics
  'gimp': 'https://images.unsplash.com/photo-1707061229170-fc232a07a55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW1wJTIwaW1hZ2UlMjBlZGl0b3IlMjBncmFwaGljc3xlbnwxfHx8fDE3NTYxMDg5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  // Gaming
  'steam': 'https://images.unsplash.com/photo-1650795109202-11ddc89e0d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbSUyMGdhbWluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc1NjEwOTAwMnww&ixlib=rb-4.1.0&q=80&w=1080',
};

// Fallback to category-based images
const categoryImages = {
  'Web Browsers': 'https://images.unsplash.com/photo-1668853907314-e93ecf0526bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBjaHJvbWUlMjBicm93c2VyfGVufDF8fHx8MTc1NjEwODk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
  'IDEs & Code Editors': 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Programming Languages': 'https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwY29tbWFuZCUyMGxpbmV8ZW58MXx8fHwxNzU2MTA4OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Version Control': 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Databases': 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'DevOps & Containers': 'https://images.unsplash.com/photo-1578575778986-380b94467767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2NrZXIlMjBjb250YWluZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjA0NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  'Web Development': 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Communication': 'https://images.unsplash.com/photo-1603899122332-81418ddc0e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNjb3JkJTIwYXBwJTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NTYxMDg5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'Multimedia & Graphics': 'https://images.unsplash.com/photo-1707061229170-fc232a07a55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaW1wJTIwaW1hZ2UlMjBlZGl0b3IlMjBncmFwaGljc3xlbnwxfHx8fDE3NTYxMDg5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'Office & Productivity': 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Terminal & Shell': 'https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwY29tbWFuZCUyMGxpbmV8ZW58MXx8fHwxNzU2MTA4OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'System Utilities': 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'File Management': 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJpYW4lMjBsaW51eCUyMHNlcnZlcnxlbnwxfHx8fDE3NTYxMDg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'Security & Privacy': 'https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwY29tbWFuZCUyMGxpbmV8ZW58MXx8fHwxNzU2MTA4OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Gaming': 'https://images.unsplash.com/photo-1650795109202-11ddc89e0d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbSUyMGdhbWluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc1NjEwOTAwMnww&ixlib=rb-4.1.0&q=80&w=1080',
  'Virtualization': 'https://images.unsplash.com/photo-1578575778986-380b94467767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2NrZXIlMjBjb250YWluZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjA0NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  'Build Tools': 'https://images.unsplash.com/photo-1550063873-ab792950096b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBzdHVkaW8lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU2MTA4OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
};

export function getAppImage(category, appId) {
  // Return specific image if available
  if (specificImages[appId]) {
    return specificImages[appId];
  }
  
  // Fallback to category-based images
  return categoryImages[category] || categoryImages['Programming Languages'];
}
