var vin_p,vin_s,p_value;
function inputcalc(){
    vin_p = document.getElementById("vin-value_p").value;
    vin_s = (1/5)*parseFloat(vin_p);
    document.getElementById("vin-value_s").value = vin_s.toPrecision(4);
    p_value = parseFloat(vin_s)*Math.sqrt(2);
    document.getElementById("p-value").value = p_value.toPrecision(4);
}
var vin,frqv,rlv,aov,aoc,adv,rov,roc,rdv,pdl,re,tuf,rf,ff,spf;
var a,b,c,d,e;
function calculation_1(){

    if(document.getElementById("vin-value_p").value == ""){
        alert("Enter the Input Voltage for calculation")
    }
    else if(document.getElementById("frq-value").value == ""){
        alert("Enter the Frequency for calculation")
    }
    else if(document.getElementById("rl-value").value == ""){
        alert("Enter the Load Resistance for calculation")
    }
    else{
        vin = document.getElementById("p-value").value;
        frqv = document.getElementById("frq-value").value;
        rlv = document.getElementById("rl-value").value;
    
        // --------------------CALCULATION OF Vo--------------------
        aov = parseFloat(vin)/Math.PI;
        document.getElementById("V_out").value = aov.toPrecision(4);
        // --------------------CALCULATION OF Io--------------------
        aoc = parseFloat(aov)/parseFloat(rlv);
        document.getElementById("I_out").value = aoc.toPrecision(4);
        // --------------------CALCULATION OF Vd--------------------
        aod = -aov;
        document.getElementById("V_D").value = aod.toPrecision(4);            
        // --------------------CALCULATION OF Vo(rms)--------------------
        rov = parseFloat(vin)/2;
        document.getElementById("V_out_rms").value = rov.toPrecision(4);            
        // --------------------CALCULATION OF Io(rms)--------------------
        roc = parseFloat(rov)/parseFloat(rlv);
        document.getElementById("I_out_rms").value = roc.toPrecision(4);            
        // --------------------CALCULATION OF Vd(rms)--------------------
        rdv = parseFloat(rov);
        document.getElementById("V_D_rms").value = rdv.toPrecision(4);            
        // --------------------CALCULATION OF P(del)[Load]--------------------
        pdl = Math.pow(rov,2)/parseFloat(rlv);
        document.getElementById("p_del").value = pdl.toPrecision(4);            
        // --------------------CALCULATION OF ╖--------------------
        re = (4/Math.pow(Math.PI,2))*100;
        document.getElementById("re").value = re.toPrecision(4);            
        // --------------------CALCULATION OF TUF--------------------
        a = (parseFloat(aov)*parseFloat(aoc));
        b = ((parseFloat(vin)/Math.sqrt(2))*parseFloat(roc));
        tuf = (parseFloat(a)/parseFloat(b))
        document.getElementById("tuf").value = tuf.toPrecision(4);            
        // --------------------CALCULATION OF RF--------------------
        c = parseFloat(roc)/parseFloat(aoc);
        d = (Math.pow(c,2)) - 1;
        rf = Math.sqrt(d);
        document.getElementById("rf").value = rf.toPrecision(4);            
        // --------------------CALCULATION OF FF--------------------
        e = Math.pow(rf,2) + 1;
        ff = Math.sqrt(e);
        document.getElementById("ff").value = ff.toPrecision(4);            
        // --------------------CALCULATION OF SPF--------------------
        spf = 1/Math.sqrt(2);
        document.getElementById("spf").value = spf.toPrecision(4);           
        // --------------------CALCULATION OF PIV--------------------
        document.getElementById("piv").value = p_value.toPrecision(4);
        alert("Output values calculated");
        document.getElementById("next-btn").style.display = "block";            
    }
}