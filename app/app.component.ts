import  {Component}  from  '@angular/core' ;
import {QuestionService} from "./question.service";

@Component({
    selector:'my-app',
    template:
        `
            <div>
                <h2>angular2 dynamic form showcase </h2>
                <dynamic-form [questions]="questions" ></dynamic-form>
            </div>
        `,
    providers:[QuestionService]
})
export  class  AppComponent {
    questions:any[];
    constructor(questionService:QuestionService){
        this.questions = questionService.getQuestions() ;
    }
}