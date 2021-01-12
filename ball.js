class Ball{
    constructor(x,y,radius){
       var options = {                                                            
           restitution : 0.4,                                                            
           friction : 1.0,                                                            
           density : 0.3                                                            
       }                                                            
        this.body = Bodies.circle(x,y,radius,options)                                                             
        this.radius =radius                                                           
        World.add(world,this.body)                                                            
    }                                                            
    display(){                                                            
        var pos = this.body.position                                                             
        //push()
                                                                  
        //translate(pos.x ,pos.y)                                                            
        //rotate(this.body.angle)
        fill("blue")     
           
        ellipseMode(RADIUS)                                                   
        ellipse(pos.x,pos.y,this.radius,this.radius) 
        //pop()                                                           
                                                                    
    }                                                            
}