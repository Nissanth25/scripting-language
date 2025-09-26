proc sphereVolume {r} {
    set pi 3.141592653589793
    set vol [expr {(4.0/3.0) * $pi * pow($r, 3)}]
    return $vol
}

puts -nonewline "Enter the radius of the sphere: "
flush stdout
gets stdin radius

set volume [sphereVolume $radius]
puts "The volume of the sphere is: $volume"
