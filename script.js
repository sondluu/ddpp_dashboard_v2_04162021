

let p1 = document.getElementById("phys").rows[0].cells.item(1).innerHTML;
let p2 = document.getElementById("phys").rows[0].cells.item(2).innerHTML;
let p3 = document.getElementById("phys").rows[0].cells.item(3).innerHTML;


if (p1 == "H") {
    greenDotP1();
  } else if (p1 == "L") {
    redDotP1();
  }
  
  function greenDotP1() {
    let x1 = document.getElementById("phys").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotP1() {
    let x1 = document.getElementById("phys").rows[2].cells;
    x1[1].innerHTML = "🔴";
  }

  
if (p2 == "H") {
    greenDotP2();
  } else if (p2 == "L") {
    redDotP2();
  }
  
  function greenDotP2() {
    let x2 = document.getElementById("phys").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotP2() {
    let x2 = document.getElementById("phys").rows[2].cells;
    x2[2].innerHTML = "🔴";
  }


    
if (p3 == "H") {
    greenDotP3();
  } else if (p3 == "L") {
    redDotP3();
  }
  
  function greenDotP3() {
    let x3 = document.getElementById("phys").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotP3() {
    let x3 = document.getElementById("phys").rows[2].cells;
    x3[3].innerHTML = "🔴";
  }



let l1 = document.getElementById("learn").rows[0].cells.item(1).innerHTML;
let l2 = document.getElementById("learn").rows[0].cells.item(2).innerHTML;
let l3 = document.getElementById("learn").rows[0].cells.item(3).innerHTML;

if (l1 == "H") {
    greenDotL1();
  } else if (l1 == "L") {
    redDotL1();
  }
  
  function greenDotL1() {
    let x1 = document.getElementById("learn").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotL1() {
    let x1 = document.getElementById("learn").rows[2].cells;
    x1[1].innerHTML = "🔴";
  }

  
if (l2 == "H") {
    greenDotL2();
  } else if (l2 == "L") {
    redDotL2();
  }
  
  function greenDotL2() {
    let x2 = document.getElementById("learn").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotL2() {
    let x2 = document.getElementById("learning").rows[2].cells;
    x2[2].innerHTML = "🔴";
  }


    
if (l3 == "H") {
    greenDotL3();
  } else if (l3 == "L") {
    redDotL3();
  }
  
  function greenDotL3() {
    let x3 = document.getElementById("learn").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotL3() {
    let x3 = document.getElementById("learn").rows[2].cells;
    x3[3].innerHTML = "🔴";
  }

 
  let w1 = document.getElementById("weigh").rows[0].cells.item(1).innerHTML;
  let w2 = document.getElementById("weigh").rows[0].cells.item(2).innerHTML;
  let w3 = document.getElementById("weigh").rows[0].cells.item(3).innerHTML;
  let w51 = document.getElementById("weigh").rows[0].cells.item(51).innerHTML;
  let w52 = document.getElementById("weigh").rows[0].cells.item(52).innerHTML;


  if (w1 == "H") {
    greenDotW1();
  } else if (w1 == "L") {
    redDotW1();
  }
  
  function greenDotW1() {
    let x1 = document.getElementById("weigh").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotW1() {
    let x1 = document.getElementById("weigh").rows[2].cells;
    x1[1].innerHTML = "🔴";
  }

  
if (w2 == "H") {
    greenDotW2();
  } else if (w2 == "L") {
    redDotW2();
  }
  
  function greenDotW2() {
    let x2 = document.getElementById("weigh").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotW2() {
    let x2 = document.getElementById("weigh").rows[2].cells;
    x2[2].innerHTML = "🔴";
  }


    
if (w3 == "H") {
    greenDotW3();
  } else if (w3 == "L") {
    redDotW3();
  }
  
  function greenDotW3() {
    let x3 = document.getElementById("weigh").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotW3() {
    let x3 = document.getElementById("weigh").rows[2].cells;
    x3[3].innerHTML = "🔴";
  }



  if (w51 == "H") {
    greenDotW51();
  } else if (w51 == "L") {
    redDotW51();
  }
  
  function greenDotW51() {
    let x51 = document.getElementById("weigh").rows[1].cells;
    x51[51].innerHTML = "🟢";
  }
  
  function redDotW51() {
    let x51 = document.getElementById("weigh").rows[2].cells;
    x51[51].innerHTML = "🔴";
  }


  if (w52 == "H") {
    greenDotW52();
  } else if (w52 == "L") {
    redDotW52();
  }
  
  function greenDotW52() {
    let x52 = document.getElementById("weigh").rows[1].cells;
    x52[52].innerHTML = "🟢";
  }
  
  function redDotW52() {
    let x52 = document.getElementById("weigh").rows[2].cells;
    x52[52].innerHTML = "🔴";
  }




let c1 = document.getElementById("comm").rows[0].cells.item(1).innerHTML;
let c2 = document.getElementById("comm").rows[0].cells.item(2).innerHTML;
let c3 = document.getElementById("comm").rows[0].cells.item(3).innerHTML;
let c4 = document.getElementById("comm").rows[0].cells.item(4).innerHTML;
let c5 = document.getElementById("comm").rows[0].cells.item(5).innerHTML;
let c6 = document.getElementById("comm").rows[0].cells.item(6).innerHTML;
let c7 = document.getElementById("comm").rows[0].cells.item(7).innerHTML;
let c8 = document.getElementById("comm").rows[0].cells.item(8).innerHTML;
let c9 = document.getElementById("comm").rows[0].cells.item(9).innerHTML;
let c10 = document.getElementById("comm").rows[0].cells.item(10).innerHTML;
let c11 = document.getElementById("comm").rows[0].cells.item(11).innerHTML;
let c12 = document.getElementById("comm").rows[0].cells.item(12).innerHTML;
let c13 = document.getElementById("comm").rows[0].cells.item(13).innerHTML;
let c14 = document.getElementById("comm").rows[0].cells.item(14).innerHTML;
let c15 = document.getElementById("comm").rows[0].cells.item(15).innerHTML;
let c16 = document.getElementById("comm").rows[0].cells.item(16).innerHTML;
let c17 = document.getElementById("comm").rows[0].cells.item(17).innerHTML;
let c18 = document.getElementById("comm").rows[0].cells.item(18).innerHTML;
let c19 = document.getElementById("comm").rows[0].cells.item(19).innerHTML;
let c20 = document.getElementById("comm").rows[0].cells.item(20).innerHTML;
let c21 = document.getElementById("comm").rows[0].cells.item(21).innerHTML;
let c22 = document.getElementById("comm").rows[0].cells.item(22).innerHTML;
let c23 = document.getElementById("comm").rows[0].cells.item(23).innerHTML;
let c24 = document.getElementById("comm").rows[0].cells.item(24).innerHTML;
let c25 = document.getElementById("comm").rows[0].cells.item(25).innerHTML;
let c26 = document.getElementById("comm").rows[0].cells.item(26).innerHTML;
let c27 = document.getElementById("comm").rows[0].cells.item(27).innerHTML;
let c28 = document.getElementById("comm").rows[0].cells.item(28).innerHTML;
let c29 = document.getElementById("comm").rows[0].cells.item(29).innerHTML;
let c30 = document.getElementById("comm").rows[0].cells.item(30).innerHTML;
let c31 = document.getElementById("comm").rows[0].cells.item(31).innerHTML;
let c32 = document.getElementById("comm").rows[0].cells.item(32).innerHTML;
let c33 = document.getElementById("comm").rows[0].cells.item(33).innerHTML;
let c34 = document.getElementById("comm").rows[0].cells.item(34).innerHTML;
let c35 = document.getElementById("comm").rows[0].cells.item(35).innerHTML;
let c36 = document.getElementById("comm").rows[0].cells.item(36).innerHTML;
let c37 = document.getElementById("comm").rows[0].cells.item(37).innerHTML;
let c38 = document.getElementById("comm").rows[0].cells.item(38).innerHTML;
let c39 = document.getElementById("comm").rows[0].cells.item(39).innerHTML;
let c40 = document.getElementById("comm").rows[0].cells.item(40).innerHTML;
let c41 = document.getElementById("comm").rows[0].cells.item(41).innerHTML;
let c42 = document.getElementById("comm").rows[0].cells.item(42).innerHTML;
let c43 = document.getElementById("comm").rows[0].cells.item(43).innerHTML;
let c44 = document.getElementById("comm").rows[0].cells.item(44).innerHTML;
let c45 = document.getElementById("comm").rows[0].cells.item(45).innerHTML;
let c46 = document.getElementById("comm").rows[0].cells.item(46).innerHTML;
let c47 = document.getElementById("comm").rows[0].cells.item(47).innerHTML;
let c48 = document.getElementById("comm").rows[0].cells.item(48).innerHTML;
let c49 = document.getElementById("comm").rows[0].cells.item(49).innerHTML;
let c50 = document.getElementById("comm").rows[0].cells.item(50).innerHTML;
let c51 = document.getElementById("comm").rows[0].cells.item(51).innerHTML;
let c52 = document.getElementById("comm").rows[0].cells.item(52).innerHTML;

if (c1 == "H") {
    greenDotC1();
  } else if (c1 == "L") {
    redDotC1();
  }
  
  function greenDotC1() {
    let x1 = document.getElementById("comm").rows[1].cells;
    x1[1].innerHTML = "🟢";
  }
  
  function redDotC1() {
    let x1 = document.getElementById("comm").rows[2].cells;
    x1[1].innerHTML = "🔴";
  }

  
if (c2 == "H") {
    greenDotC2();
  } else if (c2 == "L") {
    redDotC2();
  }
  
  function greenDotC2() {
    let x2 = document.getElementById("comm").rows[1].cells;
    x2[2].innerHTML = "🟢";
  }
  
  function redDotC2() {
    let x2 = document.getElementById("comm").rows[2].cells;
    x2[2].innerHTML = "🔴";
  }


    
if (c3 == "H") {
    greenDotC3();
  } else if (c3 == "L") {
    redDotC3();
  }
  
  function greenDotC3() {
    let x3 = document.getElementById("comm").rows[1].cells;
    x3[3].innerHTML = "🟢";
  }
  
  function redDotC3() {
    let x3 = document.getElementById("comm").rows[2].cells;
    x3[3].innerHTML = "🔴";
  }



  if (c4 == "H") {
    greenDotC4();
  } else if (c4 == "L") {
    redDotC4();
  }
  
  function greenDotC4() {
    let x4 = document.getElementById("comm").rows[1].cells;
    x4[4].innerHTML = "🟢";
  }
  
  function redDotC4() {
    let x4 = document.getElementById("comm").rows[2].cells;
    x4[4].innerHTML = "🔴";
  }

  
if (c5 == "H") {
    greenDotC5();
  } else if (c5 == "L") {
    redDotC5();
  }
  
  function greenDotC5() {
    let x5 = document.getElementById("comm").rows[1].cells;
    x5[5].innerHTML = "🟢";
  }
  
  function redDotC5() {
    let x5 = document.getElementById("comm").rows[2].cells;
    x5[5].innerHTML = "🔴";
  }


    
if (c6 == "H") {
    greenDotC6();
  } else if (c6 == "L") {
    redDotC6();
  }
  
  function greenDotC6() {
    let x6 = document.getElementById("comm").rows[1].cells;
    x6[6].innerHTML = "🟢";
  }
  
  function redDotC6() {
    let x6 = document.getElementById("comm").rows[2].cells;
    x6[6].innerHTML = "🔴";
  }

      
if (c7 == "H") {
    greenDotC7();
  } else if (c7 == "L") {
    redDotC7();
  }
  
  function greenDotC7() {
    let x7 = document.getElementById("comm").rows[1].cells;
    x7[7].innerHTML = "🟢";
  }
  
  function redDotC7() {
    let x7 = document.getElementById("comm").rows[2].cells;
    x7[7].innerHTML = "🔴";
  }


        
if (c8 == "H") {
    greenDotC8();
  } else if (c8 == "L") {
    redDotC8();
  }
  
  function greenDotC8() {
    let x8 = document.getElementById("comm").rows[1].cells;
    x8[8].innerHTML = "🟢";
  }
  
  function redDotC8() {
    let x8 = document.getElementById("comm").rows[2].cells;
    x8[8].innerHTML = "🔴";
  }


          
if (c9 == "H") {
    greenDotC9();
  } else if (c9 == "L") {
    redDotC9();
  }
  
  function greenDotC9() {
    let x9 = document.getElementById("comm").rows[1].cells;
    x9[9].innerHTML = "🟢";
  }
  
  function redDotC9() {
    let x9 = document.getElementById("comm").rows[2].cells;
    x9[9].innerHTML = "🔴";
  }



  if (c10 == "H") {
    greenDotC10();
  } else if (c10 == "L") {
    redDotC10();
  }
  
  function greenDotC10() {
    let x10 = document.getElementById("comm").rows[1].cells;
    x10[10].innerHTML = "🟢";
  }
  
  function redDotC10() {
    let x10 = document.getElementById("comm").rows[2].cells;
    x10[10].innerHTML = "🔴";
  }



  if (c11 == "H") {
    greenDotC11();
  } else if (c11 == "L") {
    redDotC11();
  }
  
  function greenDotC11() {
    let x11 = document.getElementById("comm").rows[1].cells;
    x11[11].innerHTML = "🟢";
  }
  
  function redDotC11() {
    let x11 = document.getElementById("comm").rows[2].cells;
    x11[11].innerHTML = "🔴";
  }


  if (c12 == "H") {
    greenDotC12();
  } else if (c12 == "L") {
    redDotC12();
  }
  
  function greenDotC12() {
    let x12 = document.getElementById("comm").rows[1].cells;
    x12[12].innerHTML = "🟢";
  }
  
  function redDotC12() {
    let x12 = document.getElementById("comm").rows[2].cells;
    x12[12].innerHTML = "🔴";
  }


  if (c13 == "H") {
    greenDotC13();
  } else if (c13 == "L") {
    redDotC13();
  }
  
  function greenDotC13() {
    let x13 = document.getElementById("comm").rows[1].cells;
    x13[13].innerHTML = "🟢";
  }
  
  function redDotC13() {
    let x13 = document.getElementById("comm").rows[2].cells;
    x13[13].innerHTML = "🔴";
  }



  if (c14 == "H") {
    greenDotC14();
  } else if (c14 == "L") {
    redDotC14();
  }
  
  function greenDotC14() {
    let x14 = document.getElementById("comm").rows[1].cells;
    x14[14].innerHTML = "🟢";
  }
  
  function redDotC14() {
    let x14 = document.getElementById("comm").rows[2].cells;
    x14[14].innerHTML = "🔴";
  }



  if (c15 == "H") {
    greenDotC15();
  } else if (c15 == "L") {
    redDotC15();
  }
  
  function greenDotC15() {
    let x15 = document.getElementById("comm").rows[1].cells;
    x15[15].innerHTML = "🟢";
  }
  
  function redDotC15() {
    let x15 = document.getElementById("comm").rows[2].cells;
    x15[15].innerHTML = "🔴";
  }



  if (c16 == "H") {
    greenDotC16();
  } else if (c16 == "L") {
    redDotC16();
  }
  
  function greenDotC16() {
    let x16 = document.getElementById("comm").rows[1].cells;
    x16[16].innerHTML = "🟢";
  }
  
  function redDotC16() {
    let x16 = document.getElementById("comm").rows[2].cells;
    x16[16].innerHTML = "🔴";
  }


  if (c17 == "H") {
    greenDotC17();
  } else if (c17 == "L") {
    redDotC17();
  }
  
  function greenDotC17() {
    let x17 = document.getElementById("comm").rows[1].cells;
    x17[17].innerHTML = "🟢";
  }
  
  function redDotC17() {
    let x17 = document.getElementById("comm").rows[2].cells;
    x14[17].innerHTML = "🔴";
  }




  if (c18 == "H") {
    greenDotC18();
  } else if (c18 == "L") {
    redDotC18();
  }
  
  function greenDotC18() {
    let x18 = document.getElementById("comm").rows[1].cells;
    x18[18].innerHTML = "🟢";
  }
  
  function redDotC18() {
    let x18 = document.getElementById("comm").rows[2].cells;
    x18[18].innerHTML = "🔴";
  }



  if (c19 == "H") {
    greenDotC19();
  } else if (c19 == "L") {
    redDotC19();
  }
  
  function greenDotC19() {
    let x19 = document.getElementById("comm").rows[1].cells;
    x19[19].innerHTML = "🟢";
  }
  
  function redDotC19() {
    let x19 = document.getElementById("comm").rows[2].cells;
    x19[19].innerHTML = "🔴";
  }



  if (c20 == "H") {
    greenDotC20();
  } else if (c20 == "L") {
    redDotC20();
  }
  
  function greenDotC20() {
    let x20 = document.getElementById("comm").rows[1].cells;
    x20[20].innerHTML = "🟢";
  }
  
  function redDotC20() {
    let x20 = document.getElementById("comm").rows[2].cells;
    x20[20].innerHTML = "🔴";
  }



  if (c21 == "H") {
    greenDotC21();
  } else if (c21 == "L") {
    redDotC21();
  }
  
  function greenDotC21() {
    let x21 = document.getElementById("comm").rows[1].cells;
    x21[21].innerHTML = "🟢";
  }
  
  function redDotC21() {
    let x21 = document.getElementById("comm").rows[2].cells;
    x21[21].innerHTML = "🔴";
  }



  if (c22 == "H") {
    greenDotC22();
  } else if (c22 == "L") {
    redDotC22();
  }
  
  function greenDotC22() {
    let x22 = document.getElementById("comm").rows[1].cells;
    x22[22].innerHTML = "🟢";
  }
  
  function redDotC22() {
    let x22 = document.getElementById("comm").rows[2].cells;
    x22[22].innerHTML = "🔴";
  }



  if (c23 == "H") {
    greenDotC23();
  } else if (c23 == "L") {
    redDotC23();
  }
  
  function greenDotC23() {
    let x23 = document.getElementById("comm").rows[1].cells;
    x23[23].innerHTML = "🟢";
  }
  
  function redDotC23() {
    let x23 = document.getElementById("comm").rows[2].cells;
    x23[23].innerHTML = "🔴";
  }



  if (c24 == "H") {
    greenDotC24();
  } else if (c24 == "L") {
    redDotC24();
  }
  
  function greenDotC24() {
    let x24 = document.getElementById("comm").rows[1].cells;
    x24[24].innerHTML = "🟢";
  }
  
  function redDotC24() {
    let x24 = document.getElementById("comm").rows[2].cells;
    x24[24].innerHTML = "🔴";
  }




  if (c25 == "H") {
    greenDotC25();
  } else if (c25 == "L") {
    redDotC25();
  }
  
  function greenDotC25() {
    let x25 = document.getElementById("comm").rows[1].cells;
    x25[25].innerHTML = "🟢";
  }
  
  function redDotC25() {
    let x25 = document.getElementById("comm").rows[2].cells;
    x25[25].innerHTML = "🔴";
  }




  if (c26 == "H") {
    greenDotC26();
  } else if (c26 == "L") {
    redDotC26();
  }
  
  function greenDotC26() {
    let x26 = document.getElementById("comm").rows[1].cells;
    x26[26].innerHTML = "🟢";
  }
  
  function redDotC26() {
    let x26 = document.getElementById("comm").rows[2].cells;
    x26[26].innerHTML = "🔴";
  }



  if (c27 == "H") {
    greenDotC27();
  } else if (c27 == "L") {
    redDotC27();
  }
  
  function greenDotC27() {
    let x27 = document.getElementById("comm").rows[1].cells;
    x27[27].innerHTML = "🟢";
  }
  
  function redDotC27() {
    let x27 = document.getElementById("comm").rows[2].cells;
    x27[27].innerHTML = "🔴";
  }



  if (c28 == "H") {
    greenDotC28();
  } else if (c28 == "L") {
    redDotC28();
  }
  
  function greenDotC28() {
    let x28 = document.getElementById("comm").rows[1].cells;
    x28[28].innerHTML = "🟢";
  }
  
  function redDotC28() {
    let x28 = document.getElementById("comm").rows[2].cells;
    x28[28].innerHTML = "🔴";
  }



  if (c29 == "H") {
    greenDotC29();
  } else if (c29 == "L") {
    redDotC29();
  }
  
  function greenDotC29() {
    let x29 = document.getElementById("comm").rows[1].cells;
    x29[29].innerHTML = "🟢";
  }
  
  function redDotC29() {
    let x29 = document.getElementById("comm").rows[2].cells;
    x29[29].innerHTML = "🔴";
  }



  if (c30 == "H") {
    greenDotC30();
  } else if (c30 == "L") {
    redDotC30();
  }
  
  function greenDotC30() {
    let x30 = document.getElementById("comm").rows[1].cells;
    x30[30].innerHTML = "🟢";
  }
  
  function redDotC30() {
    let x30 = document.getElementById("comm").rows[2].cells;
    x30[30].innerHTML = "🔴";
  }




  if (c31 == "H") {
    greenDotC31();
  } else if (c31 == "L") {
    redDotC31();
  }
  
  function greenDotC31() {
    let x31 = document.getElementById("comm").rows[1].cells;
    x31[31].innerHTML = "🟢";
  }
  
  function redDotC31() {
    let x31 = document.getElementById("comm").rows[2].cells;
    x31[31].innerHTML = "🔴";
  }



  
  if (c32 == "H") {
    greenDotC32();
  } else if (c32 == "L") {
    redDotC32();
  }
  
  function greenDotC32() {
    let x32 = document.getElementById("comm").rows[1].cells;
    x32[32].innerHTML = "🟢";
  }
  
  function redDotC32() {
    let x32 = document.getElementById("comm").rows[2].cells;
    x32[32].innerHTML = "🔴";
  }



  if (c33 == "H") {
    greenDotC33();
  } else if (c33 == "L") {
    redDotC33();
  }
  
  function greenDotC33() {
    let x33 = document.getElementById("comm").rows[1].cells;
    x33[33].innerHTML = "🟢";
  }
  
  function redDotC33() {
    let x33 = document.getElementById("comm").rows[2].cells;
    x33[33].innerHTML = "🔴";
  }



  if (c34 == "H") {
    greenDotC34();
  } else if (c34 == "L") {
    redDotC34();
  }
  
  function greenDotC34() {
    let x34 = document.getElementById("comm").rows[1].cells;
    x34[34].innerHTML = "🟢";
  }
  
  function redDotC34() {
    let x34 = document.getElementById("comm").rows[2].cells;
    x34[34].innerHTML = "🔴";
  }



  if (c35 == "H") {
    greenDotC35();
  } else if (c35 == "L") {
    redDotC35();
  }
  
  function greenDotC35() {
    let x35 = document.getElementById("comm").rows[1].cells;
    x35[35].innerHTML = "🟢";
  }
  
  function redDotC35() {
    let x35 = document.getElementById("comm").rows[2].cells;
    x35[35].innerHTML = "🔴";
  }



  if (c36 == "H") {
    greenDotC36();
  } else if (c36 == "L") {
    redDotC36();
  }
  
  function greenDotC36() {
    let x36 = document.getElementById("comm").rows[1].cells;
    x36[36].innerHTML = "🟢";
  }
  
  function redDotC36() {
    let x36 = document.getElementById("comm").rows[2].cells;
    x36[36].innerHTML = "🔴";
  }



  if (c37 == "H") {
    greenDotC37();
  } else if (c37 == "L") {
    redDotC37();
  }
  
  function greenDotC37() {
    let x37 = document.getElementById("comm").rows[1].cells;
    x37[37].innerHTML = "🟢";
  }
  
  function redDotC37() {
    let x37 = document.getElementById("comm").rows[2].cells;
    x37[37].innerHTML = "🔴";
  }



  if (c38 == "H") {
    greenDotC38();
  } else if (c38 == "L") {
    redDotC38();
  }
  
  function greenDotC38() {
    let x38 = document.getElementById("comm").rows[1].cells;
    x38[38].innerHTML = "🟢";
  }
  
  function redDotC38() {
    let x38 = document.getElementById("comm").rows[2].cells;
    x38[38].innerHTML = "🔴";
  }



  if (c39 == "H") {
    greenDotC39();
  } else if (c39 == "L") {
    redDotC39();
  }
  
  function greenDotC39() {
    let x39 = document.getElementById("comm").rows[1].cells;
    x39[39].innerHTML = "🟢";
  }
  
  function redDotC39() {
    let x39 = document.getElementById("comm").rows[2].cells;
    x39[39].innerHTML = "🔴";
  }



  if (c40 == "H") {
    greenDotC40();
  } else if (c40 == "L") {
    redDotC40();
  }
  
  function greenDotC40() {
    let x40 = document.getElementById("comm").rows[1].cells;
    x40[40].innerHTML = "🟢";
  }
  
  function redDotC40() {
    let x40 = document.getElementById("comm").rows[2].cells;
    x40[40].innerHTML = "🔴";
  }



  if (c41 == "H") {
    greenDotC41();
  } else if (c41 == "L") {
    redDotC41();
  }
  
  function greenDotC41() {
    let x41 = document.getElementById("comm").rows[1].cells;
    x41[41].innerHTML = "🟢";
  }
  
  function redDotC41() {
    let x41 = document.getElementById("comm").rows[2].cells;
    x41[41].innerHTML = "🔴";
  }



  if (c42 == "H") {
    greenDotC42();
  } else if (c42 == "L") {
    redDotC42();
  }
  
  function greenDotC42() {
    let x42 = document.getElementById("comm").rows[1].cells;
    x42[42].innerHTML = "🟢";
  }
  
  function redDotC42() {
    let x42 = document.getElementById("comm").rows[2].cells;
    x42[42].innerHTML = "🔴";
  }




  if (c43 == "H") {
    greenDotC43();
  } else if (c43 == "L") {
    redDotC43();
  }
  
  function greenDotC43() {
    let x43 = document.getElementById("comm").rows[1].cells;
    x43[43].innerHTML = "🟢";
  }
  
  function redDotC43() {
    let x43 = document.getElementById("comm").rows[2].cells;
    x43[43].innerHTML = "🔴";
  }


  if (c44 == "H") {
    greenDotC44();
  } else if (c44 == "L") {
    redDotC44();
  }
  
  function greenDotC44() {
    let x44 = document.getElementById("comm").rows[1].cells;
    x44[44].innerHTML = "🟢";
  }
  
  function redDotC44() {
    let x44 = document.getElementById("comm").rows[2].cells;
    x44[44].innerHTML = "🔴";
  }



  if (c45 == "H") {
    greenDotC45();
  } else if (c45 == "L") {
    redDotC45();
  }
  
  function greenDotC45() {
    let x45 = document.getElementById("comm").rows[1].cells;
    x45[45].innerHTML = "🟢";
  }
  
  function redDotC45() {
    let x45 = document.getElementById("comm").rows[2].cells;
    x45[45].innerHTML = "🔴";
  }



  if (c46 == "H") {
    greenDotC46();
  } else if (c46 == "L") {
    redDotC46();
  }
  
  function greenDotC46() {
    let x46 = document.getElementById("comm").rows[1].cells;
    x46[46].innerHTML = "🟢";
  }
  
  function redDotC46() {
    let x46 = document.getElementById("comm").rows[2].cells;
    x46[46].innerHTML = "🔴";
  }



  if (c47 == "H") {
    greenDotC47();
  } else if (c47 == "L") {
    redDotC47();
  }
  
  function greenDotC47() {
    let x47 = document.getElementById("comm").rows[1].cells;
    x47[47].innerHTML = "🟢";
  }
  
  function redDotC47() {
    let x47 = document.getElementById("comm").rows[2].cells;
    x47[47].innerHTML = "🔴";
  }




  if (c48 == "H") {
    greenDotC48();
  } else if (c48 == "L") {
    redDotC48();
  }
  
  function greenDotC48() {
    let x48 = document.getElementById("comm").rows[1].cells;
    x48[48].innerHTML = "🟢";
  }
  
  function redDotC48() {
    let x48 = document.getElementById("comm").rows[2].cells;
    x48[48].innerHTML = "🔴";
  }



  if (c49 == "H") {
    greenDotC49();
  } else if (c49 == "L") {
    redDotC49();
  }
  
  function greenDotC49() {
    let x49 = document.getElementById("comm").rows[1].cells;
    x49[49].innerHTML = "🟢";
  }
  
  function redDotC49() {
    let x49 = document.getElementById("comm").rows[2].cells;
    x49[49].innerHTML = "🔴";
  }



  if (c50 == "H") {
    greenDotC50();
  } else if (c50 == "L") {
    redDotC50();
  }
  
  function greenDotC50() {
    let x50 = document.getElementById("comm").rows[1].cells;
    x50[50].innerHTML = "🟢";
  }
  
  function redDotC50() {
    let x50 = document.getElementById("comm").rows[2].cells;
    x50[50].innerHTML = "🔴";
  }



  if (c51 == "H") {
    greenDotC51();
  } else if (c51 == "L") {
    redDotC51();
  }
  
  function greenDotC51() {
    let x51 = document.getElementById("comm").rows[1].cells;
    x51[51].innerHTML = "🟢";
  }
  
  function redDotC51() {
    let x51 = document.getElementById("comm").rows[2].cells;
    x51[51].innerHTML = "🔴";
  }



  
  if (c52 == "H") {
    greenDotC52();
  } else if (c52 == "L") {
    redDotC52();
  }
  
  function greenDotC52() {
    let x52 = document.getElementById("comm").rows[1].cells;
    x52[52].innerHTML = "🟢";
  }
  
  function redDotC52() {
    let x52 = document.getElementById("comm").rows[2].cells;
    x52[52].innerHTML = "🔴";
  }


