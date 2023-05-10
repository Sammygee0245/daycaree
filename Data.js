let projects = [
    {
        id:1,
        image:"pics/c1.jpg"
    },
    {
        id:2,
        image:"pics/gl19.jpg"
    },
    {
        id:3,
        image:"pics/gl18.jpg"
    }
    ,
    {
        id:4,
        image:"pics/gl17.jpg"
    },
    {
        id:5,
        image:"pics/gl16.jpg"
    },
    {
        id:6,
        image:"pics/gl15.jpg"
    },
    {
        id:7,
        image:"pics/gl14.jpg"
    },
    {
        id:8,
        image:"pics/gl13.jpg"
    }, {
        id:9,
        image:"pics/gl12.jpg"
    },
    {
        id:10,
        image:"pics/gl11.jpg"
    },
    {
        id:11,
        image:"pics/gl10.jpg"
    }
    ,
    {
        id:12,
        image:"pics/gl9.jpg"
    },
    {
        id:13,
        image:"pics/gl8.jpg"
    },
    {
        id:14,
        image:"pics/gl7.jpg"
    },
    {
        id:15,
        image:"pics/gl6.jpg"
    },
    {
        id:16,
        image:"pics/gl5.jpg"
    }, {
        id:17,
        image:"pics/gl4.jpg"
    },
    {
        id:18,
        image:"pics/gl3.jpg"
    },
    {
        id:19,
        image:"pics/gl2.jpg"
    }
    ,
    {
        id:20,
        image:"pics/gl1.jpg"
    },
    {
        id:21,
        image:"pics/ho4.jpg"
    },
    {
        id:22,
        image:"pics/c5.jpg"
    },
    {
        id:23,
        image:"pics/c6.jpg"
    },
    {
        id:24,
        image:"pics/c8.jpg"
    }, {
        id:25,
        image:"pics/c9.jpg"
    },
    {
        id:26,
        image:"pics/c11.jpg"
    },
    {
        id:27,
        image:"pics/c12.jpg"
    }
    ,
    {
        id:28,
        image:"pics/c13.jpg"
    },
    {
        id:29,
        image:"pics/c14.jpg"
    },
    {
        id:30,
        image:"pics/c15.jpg"
    },
    {
        id:31,
        image:"pics/ho1.jpg"
    }
    ,
    {
        id:32,
        image:"pics/ho2.jpg"
    },
    {
        id:33,
        image:"pics/ho3.jpg"
    },
   
  
   
]

let gallary = document.querySelector("#gl-shelf")

function showTime(){
    gallary.innerHTML = projects.map((x)=>{
        let {id, image} = x
    return`
    <div class="prj">
    <img class="prj-img" src=${image} alt="">
  </div>
    `
    }
    
    
    ).join("")
    
}
showTime()