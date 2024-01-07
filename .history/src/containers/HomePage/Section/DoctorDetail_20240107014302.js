// DoctorDetail.js
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class DoctorDetail extends Component {
    componentDidUpdate() {
        console.log('Props in DoctorDetail:', this.props);

        const selectedDoctor = this.props?.location?.state?.selectedDoctor;

        console.log('Selected Doctor in DoctorDetail:', selectedDoctor);
    }

    render() {
        const selectedDoctor =
            this.props.location &&
            this.props.location.state &&
            this.props.location.state.selectedDoctor;

        console.log('Selected Doctor in DoctorDetail:', selectedDoctor);

        return (
            <div>
                {selectedDoctor && (
                    <>
                        <h2>Thông tin chi tiết bác sĩ</h2>
                        <p>Chức danh: {selectedDoctor.valueVi}</p>
                        <p>Position: {selectedDoctor.valueEn}</p>
                        <h3>Thông tin chuyên khoa</h3>
                        <p>ID Chuyên khoa: {selectedDoctor.specialtyData.id}</p>
                        <p>Tên chuyên khoa: {selectedDoctor.specialtyData.name}</p>
                        <h3>Thông tin cơ bản</h3>
                        <p>ID Bác sĩ: {selectedDoctor.doctors.doctorId}</p>
                        <p>Địa chỉ cơ sở Y tế: {selectedDoctor.doctors.addressClinic}</p>
                        <p>Tên cơ sở Y tế: {selectedDoctor.doctors.nameClinic}</p>
                        <p>ID Phòng khám: {selectedDoctor.doctors.clinicId}</p>
                        <h3>Thông tin giá</h3>
                        <p>ID Giá: {selectedDoctor.doctors.priceId}</p>
                      
                        <p>Loại giá (VND): {selectedDoctor.doctors.priceTypeData.valueVi}</p>
                        <h3>Thông tin vị trí</h3>
                      
                        <p>Tỉnh/Thành phố: {selectedDoctor.doctors.provinceTypeData.valueVi}</p>
                       
                    </>
                )}
            </div>
        );
    }
}

export default withRouter(DoctorDetail);
