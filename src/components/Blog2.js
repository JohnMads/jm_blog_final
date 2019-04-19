import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import code from '../images/coding.png';

class Blog2 extends Component {
         state = {
            id: null
        }

    componentDidMount() {
        let id = this.props.match.params.blog2;
        this.setState({
            id: id
        })
    }
    
    render() {
        return (
            <div className="blog-container">
                <Header />
                <div className="blog-content">
                    <p>03/06/2019</p>
                    <h1>The Benefits of Learning to Code</h1>
                    <img src={code} alt="coding"></img>
                    <p>Lorem ipsum dolor sit amet, epicurei deseruisse assueverit sea ex, ex sea nostro sanctus partiendo, nec probo quodsi utroque ex. Wisi harum comprehensam vim ut, has in bonorum quaestio. Veniam vocibus intellegebat vel et, est ex fugit doming fuisset. In assum maluisset usu. Usu ea dico erat novum.</p>

                    <p>Qui ei iuvaret aliquid, quo quaerendum appellantur an. No dolores eligendi mediocritatem cum. Vix esse lucilius interpretaris cu. An eam oblique moderatius, vero accusam in mea, falli ridens mel ut. Quo an consul audire. Unum qualisque dissentias mel et, an facer utamur docendi usu. Ubique cetero in eum, cu nusquam fabellas mel.</p>

                    <p>Quo affert commune neglegentur ad, paulo putent aperiri ea mel, est probo laoreet in. Viris oratio volutpat, tollit laoreet comprehensam pri et, quo modus summo paulo ei. Lobortis signiferumque sed no, at eos omnis evertitur appellantur. Ex mel decore habemus civibus, qui ipsum ignota luptatum ne, ei argumentum interpretaris est. Duo id nemore oportere philosophia, sea ea duis nostrum.</p>

                    <p>Cu aliquando expetendis sententiae qui. Reque soluta mel ex, nec cetero officiis consequuntur at. In vel sonet noster, et qui sint dictas posidonium, nec ne feugiat definitiones. Phaedrum iracundia adolescens pri ei. Usu elitr alienum ex. Erant inciderint ea sit, ex qui salutatus honestatis mediocritatem, at malis quodsi elaboraret pri. Cetero elaboraret at nam, ancillae efficiendi efficiantur nam eu, graecis assueverit ne quo.</p>

                    <p>Pri denique menandri interpretaris in, zril tempor utroque et eam, duo tation semper debitis ne. Nam tollit utinam discere an, nec in vide wisi aperiam, cu nisl equidem nonumes usu. Eu nibh modus mei, esse eripuit moderatius ea per. Nam ut facete diceret epicurei. Pro partem accommodare ad, mundi mandamus similique ei pri, timeam luptatum in eum. Vim at soleat tractatos comprehensam.</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Blog2;