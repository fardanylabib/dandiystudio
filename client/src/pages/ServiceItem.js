import React from 'react';
const WhatsAppIcon = require('../assets/icons/whatsapp.svg');
class ServiceItem extends React.Component{


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

    render(){
        const params = this.props.match.params;
        return(
            <div className="app-container" >
                <div className="app-content" >
                    <div className = "section">
                        <div className = "container" style={{paddingBottom:'40px'}}>
                            <h1 className="subtitle">
                                Pesan {params.title}
                            </h1>
                            <table className='form-tab'>
                                <tr>
                                    <td width = '30%'>
                                        Nama bisnis/organisasi Anda 
                                    </td>
                                    <td width = '70%'>
                                        <input className="input" type="text" placeholder="Contoh: PT. Sukses Makmur"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td width='30%'>
                                        Deskripsi desain
                                    </td>
                                    <td width='70%'>
                                        <textarea className="textarea"
                                            placeholder={`Deskripsi singkat tentang ${params.title} yang Anda inginkan`}/>
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
                            <div className='app-mid'>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <label className="checkbox">
                                        <input type="checkbox"/>
                                            &nbsp;Proses via WhatsApp&nbsp;
                                    </label>
                                    <img src={WhatsAppIcon}/>
                                </div>     
                                <br/>
                                <a className = 'button is-primary is-medium is-rounded'>
                                    Proses Pesanan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ServiceItem;
