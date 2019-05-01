task :start_dev do
    exec 'foreman start -f Procfile.dev'
  end
  
  namespace :start do
  task :development do
    exec 'foreman start -f Procfile'
  end

  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
  end
end

desc 'Start development server'
task :start => 'start:development'