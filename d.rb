
ok = false
File.new("知乎.docx", "r").each_char do |c|

  print c
  if c == '('
    ok = true
  elsif c==')'
    ok = false
  elsif !ok
      # print c
  end
end