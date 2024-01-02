import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from '../../store/actions';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

class TableManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDoctors: [],
        };
    }

    componentDidMount() {
        this.props.fetchDoctorByRoleId()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.doctors !== this.props.doctors) {
            this.setState({
                usersRedux: this.props.doctors,
            });
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id);
    };

    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user);
    };

    render() {
        const arrUsers = this.state.usersRedux;

        return (
            <React.Fragment>
                <div className="users-container">
                    <div className="title text-center">Manage Doctor</div>
                    <div className="users-table mt-3 mx-1 table-container">
                        <table id="TableManageUser">
                            <tbody>
                                <tr>
                                    <th>Email</th>
                                    <th>
                                        <FormattedMessage id="create-user.firstname" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="create-user.lastname" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="menu.admin.address" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="create-user.roleid" />
                                    </th>
                                    <th>Actions</th>
                                </tr>
                                {arrUsers?.length > 0 && arrUsers.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.roleId}</td>
                                        <td>
                                            <button
                                                className="btn-edit"
                                                onClick={() => this.handleEditUser(item)}
                                            >
                                                <i className="fa-solid fa-pencil"></i>
                                            </button>
                                            <button
                                                className="btn-delete"
                                                onClick={() => this.handleDeleteUser(item)}
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        doctors: state.admin.doctors,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDoctorByRoleId: () => dispatch(actions.fetchDoctorByRoleId()),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageDoctor);
