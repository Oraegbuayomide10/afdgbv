const drop_btn = document.querySelector('.drop-btn');
        const menu_wrapper = document.querySelector('.wrapper');
        const menu_bar = document.querySelector('.menu-bar');
        const setting_drop = document.querySelector('.setting-drop');
        const west_drop = document.querySelector('.west-drop');
        const help_drop = document.querySelector('.help-drop');
        const other_drop = document.querySelector('.other-drop');
        const east_drop = document.querySelector('.east-drop');
        const setting_item = document.querySelector('.setting-item');
        const help_item = document.querySelector('.help-item');
        const west_item = document.querySelector('.west-item');
        const other_item = document.querySelector('.other-item');
        const east_item = document.querySelector('.east-item');

        const back_setting_btn = document.querySelector('.back-setting-btn');
        const back_help_btn = document.querySelector('.back-help-btn');
        const back_west_btn = document.querySelector('.back-west-btn');
        const back_east_btn = document.querySelector('.back-east-btn');
        const back_other_btn = document.querySelector('.back-other-btn');




        drop_btn.onclick= (() => {
            menu_wrapper.classList.toggle('show');

        });

        setting_item.onclick= (() => {
            menu_bar.style.marginLeft = "-400px"; 
            setTimeout(()=> {
              setting_drop.style.display = "block";

            }, 100)

        });


        help_item.onclick= (() => {
            menu_bar.style.marginLeft = "-400px"; 
            setTimeout(()=> {
              help_drop.style.display = "block";
            }, 100)

        });

        west_item.onclick= (() => {
            menu_bar.style.marginLeft = "-400px"; 
            setTimeout(()=> {
              west_drop.style.display = "block";
            }, 100)


        });

        other_item.onclick= (() => {
            menu_bar.style.marginLeft = "-400px"; 
            setTimeout(()=> {
              other_drop.style.display = "block";
            }, 100)


        });

        east_item.onclick= (() => {
            menu_bar.style.marginLeft = "-400px"; 
            setTimeout(()=> {
              east_drop.style.display = "block";
            }, 100)

        });

        // direct_back buttons
        back_setting_btn.onclick= (() => {
            menu_bar.style.marginLeft = "0px"; 
            setting_drop.style.display = "none";


        });


        back_help_btn.onclick= (() => {
            menu_bar.style.marginLeft = "0px"; 
            help_drop.style.display = "none";


        });

        back_west_btn.onclick= (() => {
            menu_bar.style.marginLeft = "0px"; 
            west_drop.style.display = "none";


        });

        back_other_btn.onclick= (() => {
            menu_bar.style.marginLeft = "0px"; 
            other_drop.style.display = "none";


        });

        back_east_btn.onclick= (() => {
            menu_bar.style.marginLeft = "0px"; 
            east_drop.style.display = "none";

        });