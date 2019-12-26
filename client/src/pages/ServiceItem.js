import React from 'react';
import ServiceItemLogo from '../pages/ServiceItemLogo';
import * as Constants from '../Constants';
const getServiceURL = ''

class ServiceItem extends React.Component{

    constructor(){
        super();
        this.state = {
            service: null
        }
    }

    /**
    1. Logo
    nama organisasi/perusahaan
    bidang
    hal yang ditonjolkan
    tagline
    referensi logo

    2. Banner/spanduk
    upload konten
    deskripsi

    3. Email Marketing
    upload konten
    deskripsi

    4. Company Profile
    nama organisasi/perusahaan
    bidang usaha
    upload konten
    deskripsi

    5. Toko Online
    nama organisasi/perusahaan
    bidang usaha
    upload konten
    deskripsi
    **/

    componentDidMount() {
        const params = this.props.match.params;
        fetch(`${Constants.BASE_URL}/getService?uid=${params.id}`,{
            method  : 'GET',
            headers : {"Content-Type": "application/json"},
          }).then((resp) => {
              return resp.json();
          }).then((respData) => {
              if(respData){
                this.setState({service:respData.services});
                // console.log('dapat deskripsinya '+JSON.stringify(respData));
              }
          });
    }

    render(){
        const params = this.props.match.params;
        const {service} = this.state;
        if(service === null){
            return (
                <div className="app-container" >
                    <div className="app-content" >
                        <div className = "section">
                        <progress class="progress is-small is-primary" max="100">15%</progress>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div className="app-container" >
                <div className="app-content" >
                    <div className = "container" style={{paddingBottom:'40px'}}>
                        {
                            params.id === '0' ?
                            <ServiceItemLogo title={params.title} description={service.description}/>:
                            <ServiceForm title={params.title} description={service.description}/>
                        }
                        <div className='app-mid'>
                            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <label className="checkbox">
                                    <input type="checkbox"/>
                                        &nbsp;Proses via WhatsApp&nbsp;
                                        <i className = 'fab fa-whatsapp'/>
                                </label>
                            </div>     
                            <br/>
                            <a className = 'button is-primary is-medium is-rounded'>
                                Pesan Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const ServiceForm = ({title, description}) => (
    <div>
        <h1 className="title">{title}</h1>
        <p className = 'app-paragraph'>{description}</p>
        <br/>
        <table className='form-tab'>
            <tr>
                <td width = '30%'>
                    Nama bisnis atau organisasi 
                </td>
                <td width = '70%'>
                    <input className="input" type="text" placeholder="Misal: PT. Sukses Makmur"/>
                </td>
            </tr>
            <tr>
                <td width = '30%'>
                    Bidang usaha
                </td>
                <td width = '70%'>
                    <input className="input" type="text" placeholder="Misal: Pendidikan, Retail, Makanan"/>
                </td>
            </tr>
            <tr>
                <td width='30%'>
                    Deskripsi desain
                </td>
                <td width='70%'>
                    <textarea className="textarea"
                        placeholder={`Deskripsi singkat tentang ${title} yang Anda inginkan`}/>
                </td>
            </tr>
            <tr>
                <td width='30%'>
                    Upload konten
                </td>
                <td width='70%'>
                <div className="file has-name is-fullwidth">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume"/>
                        <span className="file-cta">
                        <span className="file-icon">
                            <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">
                            Browse file...
                        </span>
                        </span>
                        <span className="file-name">
                        
                        </span>
                    </label>
                    </div>
                </td>
            </tr>
        </table>
    </div>
)

export default ServiceItem;
