require "susy"
=begin css_dir = '_/css'
:compressed
=end
sass_dir = '_/components/sass'
javascript_dir = '_/js'
line_comments = false
output_style = :nested

require 'autoprefixer-rails'
on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css)
  end
end