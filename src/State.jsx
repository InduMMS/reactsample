var STATE = {
      datatext:{workarea:"Work Area"},
      adminData2:{isAdmin: false, isOfficial:false, 
        adminData:[{component: 'Maintain Users',id: 1},
                   {component: 'Reports',id: 2},
                   {component: 'Third...',id: 3}]},      
      STYLE : {
        adminColor: {color: 'green'},
        officialColor: {color: 'orange'},
        userColor: {color: 'blue'},
        warningColor: {color: 'orange'},
        errorColor: {color: 'red'}
      }, 
      LAYOUT: {
        box:{width:250, padding:25, display:"inline-block", height:250}
      }
    };

    export default STATE;

    // CLASS: {
    //   success:"panel panel-success",
    //   primary:"panel panel-primary",
    //   info:"panel panel-info",
    //   warning:"panel panel-warning",
    //   heading:"panel-heading",
    //   body: "panel-body"
    // },
