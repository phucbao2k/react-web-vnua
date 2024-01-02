import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from '../../store/actions';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

class TableManageBookingManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: [],
        };
    }

    componentDidMount() {
        if (!this.props.listUsers || this.props.listUsers.length === 0) {
            this.props.fetchAdminByRoleId('R1');
        } else {
            this.setState({
                usersRedux: this.props.listUsers,
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers,
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
                    <div className="title text-center">Manage Boo</div>
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
        listUsers: state.admin.admin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdminByRoleId: (roleId) => dispatch(actions.fetchAdminByRoleId(roleId)),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageBookingManager);
