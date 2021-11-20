let hr = document.querySelector('#hr');
        let mn = document.querySelector('#mn');
        let sc = document.querySelector('#sc');

        setInterval(()=>{
            let date = new Date();
            let hh = date.getHours() * 30;
            let mm = date.getMinutes() * 6;
            let ss = (date.getSeconds() + date.getMilliseconds()/1000) * 6;

            hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        },100);