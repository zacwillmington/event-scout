task :start_dev_one do
    exec 'foreman start -p 3000'
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