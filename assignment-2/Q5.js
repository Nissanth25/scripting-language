package require Tk

listbox .lb1 -width 20 -height 10
pack .lb1 -side left -padx 10 -pady 10

listbox .lb2 -width 20 -height 10
pack .lb2 -side right -padx 10 -pady 10

foreach i {Apple Banana Orange Mango Grapes} {
    .lb1 insert end $i
}

bind .lb1 <<ListboxSelect>> {
    set x [.lb1 curselection]
    if {$x ne ""} {
        set v [.lb1 get $x]
        .lb2 insert end $v
    }
}

bind .lb2 <<ListboxSelect>> {
    set x [.lb2 curselection]
    if {$x ne ""} {
        .lb2 delete $x
    }
}
