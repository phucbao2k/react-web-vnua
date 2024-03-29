// HIỂN THỊ TẤT CẢ CÁC LỊCH CÓ TRONG HỆ THỐNG


import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManagePatients.scss';
import * as actions from "../../../store/actions";
import { getAllBookings } from '../../../services/userService';
import moment from 'moment';
import { LANGUAGES } from '../../../utils';
// nếu muốn import 1 function thì ta dùng dấu ngoặc nhọn
class TableManagePatients extends Component {
    // PROPS stands for properties and is being used for passing data from one component to another.
    // But the important part here is that data with props are being passed in a uni-directional flow. ( one way from parent to child)
    constructor(props) {
        super(props);
        this.state = {
            bookingsAdminRedux: [],
            dataPatient: []

        }
    }
    //để lưu giá trị của 1 biến components, ta dùng state
    //Component là một block code độc lập để phân chia các UI (giao diện người dùng) thành các phân nhỏ riêng lẻ để dễ dàng quản lý và tái sử dụng.
    async componentDidMount() {
        this.props.fetchBookingAdminRedux();
        this.getDataPatient();

    }
    getDataPatient = async () => {

        let res = await getAllBookings({


        })
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.data
            })
        }
    }
    convertToValidDate = (birthday) => {
        // Kiểm tra xem birthday có giá trị không
        if (!birthday) {
            return null;
        }

        // Tạo một đối tượng Date từ birthday
        const dateObject = new Date(birthday);

        // Kiểm tra xem đối tượng Date có hợp lệ hay không
        if (isNaN(dateObject.getTime())) {
            return null;
        }

        return dateObject;
    }
    calculateAge = (birthday) => {
        if (!birthday) {
            return 'N/A';
        }

        // Chuyển đổi chuỗi timestamp thành số
        const timestamp = parseInt(birthday, 10);

        // Kiểm tra xem chuyển đổi có thành công không
        if (isNaN(timestamp)) {
            return 'N/A';
        }

        // Chuyển đổi timestamp thành đối tượng Date
        const dateObject = new Date(timestamp);

        // Kiểm tra xem đối tượng Date có hợp lệ hay không
        if (isNaN(dateObject.getTime())) {
            return 'N/A';
        }

        // Lấy ngày hiện tại
        const currentDate = moment();

        // Tính tuổi
        const age = currentDate.diff(moment(dateObject), 'years');

        return age.toString();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listBookings !== this.props.listBookings) {
            this.setState({
                bookingsAdminRedux: this.props.listBookings,
            })
        }
        if (this.props.language !== prevProps.language) {

        }
    }

    handleDeleteBooking = (booking) => {
        this.props.deleteBookingRedux(booking.id);
    }

    // handleEditUser = (user) => {
    //     this.props.handleEditUserFromParentKey(user)
    // }
    render() {
        let { language } = this.props;
        let arrBookings = this.state.bookingsAdminRedux;

        return (
            <React.Fragment>
                <div className="users-container">
                    <div className="col-12 users-table mt-3 mx-1">
                        <div className="title">List Bookings</div>
                        <div className="col-2 form-group">
                            <label>
                                <FormattedMessage id="patient.booking-modal.total" /> :{' '}
                                {arrBookings && arrBookings.length > 0
                                    ? '' + arrBookings.length
                                    : ''}
                            </label>
                        </div>

                        <div className="table-container">
                            <table id="TableManagePatients">
                                <tbody>
                                    <tr>
                                        <th><FormattedMessage id="patient.booking-modal.numerical-order" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.doctorName" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.email" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.time" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.fullName" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.phoneNumber" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.address" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.gender" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.age" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.reason" /></th>
                                        <th><FormattedMessage id="patient.booking-modal.status" /></th>
                                        <th>Actions</th>
                                    </tr>
                                    {arrBookings &&
                                        arrBookings.length > 0 &&
                                        arrBookings.map((item, index) => {
                                            let status =
                                                language === LANGUAGES.VI
                                                    ? item.statusTypeDataBooking.valueVi
                                                    : item.statusTypeDataBooking.valueEn;
                                            let date = moment.unix(+item.date / 1000).locale('en').format('ddd -MM/DD/YYYY');
                                            let age = this.calculateAge(item.birthday);
                                            let gender =
                                                language === LANGUAGES.VI
                                                    ? item.genderDataBooking.valueVi
                                                    : item.genderDataBooking.valueEn;
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{`${item.doctorNameData.lastName} ${item.doctorNameData.firstName}`}</td>
                                                    <td>{item.patientData.email}</td>
                                                    <td>{date}</td>
                                                    <td>{item.patientName}</td>
                                                    <td>{item.phoneNumber}</td>
                                                    <td>{item.patientData.address}</td>
                                                    <td>{gender}</td>
                                                    <td>{age}</td>
                                                    <td>{item.reasons}</td>
                                                    <td>{status}</td>
                                                    <td>
                                                        <button className="btn-delete" onClick={() => this.handleDeleteBooking(item)}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => {
    return {
        listBookings: state.admin.bookings,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBookingAdminRedux: () => dispatch(actions.fetchAllBookingAdminStart()),
        deleteBookingRedux: (id) => dispatch(actions.deleteBookingService(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManagePatients);
