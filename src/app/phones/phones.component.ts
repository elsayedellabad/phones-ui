import { Component, OnInit,  PLATFORM_ID, Inject } from '@angular/core'
import { PhonesEntity } from '../models/phones.model';
import { Services } from '../services/services';
import { isPlatformBrowser} from '@angular/common';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  public PhonesData: PhonesEntity[] = [];
  public country_code: string = 'all';
  public state: string = 'all';
  public countries = [{"code":"+237", "name":"Cameroon"}, {"code":"+251", "name":"Ethiopia"}, {"code":"+212", "name":"Morocco"}, {"code":"+258", "name":"Mozambique"}, {"code":"+256", "name":"Uganda"}]
  constructor(private callServices: Services, @Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) { 
        this.getPhonesData();
      }
    }

    /**
     * Get Countries Phones Data
    */
    getPhonesData(){
      this.PhonesData = [];
      this.callServices.getPhonesDataFromServer(this.country_code, this.state).subscribe( (PhonesDataRes : PhonesEntity[]) =>{    
          this.PhonesData = PhonesDataRes;
      });
    }
    /**
     * on Change Country
    */
    onChangeCountry(country_code: string){
      this.country_code = country_code;
      this.getPhonesData();
    }
    /**
     * on Change State
    */
    onChangeState(state: string){
      this.state = state;
      this.getPhonesData();
    }



}
