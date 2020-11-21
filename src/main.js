let divHtml = document.querySelector('#divHtml');
let style =document.querySelector('#style');
let string = `/* 大家好，我是小操同学
 *接下来我要演示一下我的前端功底
 *首先我要准备一个div
 **/
#divCircle{
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把div变成一个八卦图
 *注意看好了
 *首先，把div变成一个圆。
 **/

#divCircle{
    border-radius: 50%;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.5);
    border:none
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#divCircle{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(2,0,36,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 
**/
#divCircle::before{
    width:100px;
    height:100px;
    background:#000;
    border-radius:50%;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#divCircle::after{
    width:100px;
    height:100px;
    background:#fff;
    border-radius:50%;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%); 
    
    
}
`;
let n =0;
let  s2 = '';

function step(){
        setTimeout(()=>{
            if (n < string.length){
                console.log(string.substring(0,10));
                if(string[n] === "\n"){
                    s2+= '<br>';
                }else if (string[n] === " "){
                    s2+= '&nbsp';
                }else{
                     s2+= string[n]
                }           
                divHtml.innerHTML = s2;
                style.innerHTML =string.substring(0,n+1);
                window.scrollTo(0, 99999);//网页端
                divHtml.scroll(0,99999);//适配手机端
                
                n= n+1;
                step();
            }
        },50);
       
    }

step();
