export default class Time{

    constructor(){
        this.Time = Date.now;
        this.mDeltaTime = 0;
        this.updateTime();
    }
    updateTime()
    {
        this.mDeltaTime =(Date.now ()-this.time)*0.01;
        this.time = Date.now();
        requestAnimationFrame(this.updateTime.bind(this));
    }
    deltaTime()
    {
        return this.mDeltaTime;
    }
}