var vin_p,vin_s,p_value;
function inputcalc(){
    vin_p = document.getElementById("vin-value_p").value;
    vin_s = (1/5)*parseFloat(vin_p);
    document.getElementById("vin-value_s").value = vin_s.toPrecision(4);
    p_value = parseFloat(vin_s)*Math.sqrt(2);
    document.getElementById("p-value").value = p_value.toPrecision(4);
}
var vin,frqv,rlv,dov,doc,rov,roc,crf,vrf,cff,vff,pf,re,tuf,tuf_pw,tuf_sw,pdc,piv;
var a,b,c,d,e,cc,dd,ee;
function calculation_1(){

    if(document.getElementById("vin-value_p").value == ""){
        alert("Enter the Input Voltage for calculation")
    }
    else if(document.getElementById("frq-value").value == ""){
        alert("Enter the Frequency for calculation")
    }
    // else if(document.getElementById("rl-value").value == ""){
    //     alert("Enter the Load Resistance for calculation")
    // }
    else{
        vin = document.getElementById("p-value").value;
        frqv = document.getElementById("frq-value").value;
        rlv = 1000;
    
        // --------------------CALCULATION OF Vdc--------------------
        dov = (parseFloat(vin)*2)/Math.PI;
        document.getElementById("V_out").value = dov.toPrecision(4);
        // --------------------CALCULATION OF Io--------------------
        doc = parseFloat(dov)/parseFloat(rlv);
        document.getElementById("I_out").value = doc.toPrecision(4);        
        // --------------------CALCULATION OF Vo(rms)--------------------
        rov = parseFloat(vin)/Math.sqrt(2);
        document.getElementById("V_out_rms").value = rov.toPrecision(4);            
        // --------------------CALCULATION OF Io(rms)--------------------
        roc = parseFloat(rov)/parseFloat(rlv);
        document.getElementById("I_out_rms").value = roc.toPrecision(4); 
        // --------------------CALCULATION OF CRF--------------------
        c = parseFloat(roc)/parseFloat(doc);
        d = (Math.pow(c,2)) - 1;
        crf = Math.sqrt(d);
        document.getElementById("crf").value = crf.toPrecision(4);
        // --------------------CALCULATION OF VRF--------------------
        cc = parseFloat(rov)/parseFloat(dov);
        dd = (Math.pow(cc,2)) - 1;
        vrf = Math.sqrt(dd);
        document.getElementById("vrf").value = vrf.toPrecision(4);   
        // --------------------CALCULATION OF CFF--------------------
        e = Math.pow(crf,2) + 1;
        cff = Math.sqrt(e);
        document.getElementById("cff").value = cff.toPrecision(4);
        // --------------------CALCULATION OF VFF--------------------
        ee = Math.pow(vrf,2) + 1;
        vff = Math.sqrt(ee);
        document.getElementById("vff").value = vff.toPrecision(4);
        // --------------------CALCULATION OF PF--------------------
        pf = (parseFloat(vin)/(parseFloat(vin)/Math.sqrt(2)));
        document.getElementById("pf").value = pf.toPrecision(4);
        // --------------------CALCULATION OF ╖--------------------
        re = (8/Math.pow(Math.PI,2))*100;
        document.getElementById("re").value = re.toPrecision(4);
        // --------------------CALCULATION OF TUF(PW)--------------------
        tuf_pw = 0.8106
        document.getElementById("tuf_pw").value = tuf_pw.toPrecision(4);
        // --------------------CALCULATION OF TUF(SW)--------------------
        tuf_sw = 2*0.2866
        document.getElementById("tuf_sw").value = tuf_sw.toPrecision(4);
        // --------------------CALCULATION OF TUF--------------------
        tuf = (parseFloat(tuf_pw)+parseFloat(tuf_sw))/2;
        document.getElementById("tuf").value = tuf.toPrecision(4);
        // --------------------CALCULATION OF Pdc--------------------
        pdc = (4*Math.pow(parseFloat(vin),2))/(Math.pow(Math.PI,2)*parseFloat(rlv));
        document.getElementById("pdc").value = pdc.toPrecision(4);                                                       
        // --------------------CALCULATION OF PIV--------------------
        piv = 2*parseFloat(p_value);
        document.getElementById("piv").value = piv.toPrecision(4);
        alert("Output values calculated");
        document.getElementById("next-btn").style.display = "block";            
    }
}