def self.LED_ON
  gpio_set_level(19,1)
  puts "turned on"
end

def self.LED_OFF
  gpio_set_level(19,0)
  puts "turned off"
end

def self.LED_Initialize
  gpio_init_output(19)
  self.LED_OFF
end

def self.Thermistor_Initialize
  gpio_init_output(0)
  gpio_set_level(0,1)
  init_adc
end

self.LED_Initialize
self.Thermistor_Initialize
while true do
  vref = read_adc
  temp = 1.to_f / ( 1.to_f / 3435 * Math.log(((3300 - vref).to_f / (vref.to_f/ 10_000)) / 10_000) + 1.to_f / (25 + 273) ) - 273
  puts temp
  if temp > 30
    self.LED_ON
    sleep(1)
  else
    self.LED_OFF
    sleep(1)
  end
end
