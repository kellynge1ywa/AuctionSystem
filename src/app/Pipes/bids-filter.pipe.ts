import { Pipe, PipeTransform } from '@angular/core';
import { Bid } from '../Interface/Bid';

@Pipe({
  name: 'bidsFilter',
  standalone: true
})
export class BidsFilterPipe implements PipeTransform {

  transform(Bids: Bid[], Filter:string):any  {
    if(Filter==="Active"){
      return Bids.filter(bid=> bid.status==="Active");
    } else if(Filter==="Closed"){
      return Bids.filter(bid=>bid.status !=="Active")
    } else{
      return Bids;

    }
  }
}
