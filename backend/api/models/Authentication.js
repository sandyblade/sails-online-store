/**
 * This file is part of the Sandy Andryanto Company Profile Website.
 *
 * @author     Sandy Andryanto <sandy.andryanto.blade@gmail.com>
 * @copyright  2025
 *
 * For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 */

module.exports = {

    tableName: 'authentications',

    attributes: {
        id  : {
            type: 'number',
            columnType: 'bigint unsigned',
            autoIncrement: true
        },
        user: {
            model: 'user'
        },
        type: {
            type: 'string',
            columnType: 'varchar(64)',
            autoMigrations: { index: true }
        },
        credential: {
            type: 'string',
            columnType: 'varchar(180)',
            autoMigrations: { index: true }
        },
        token: {
            type: 'string',
            columnType: 'varchar(36)',
            autoMigrations: { index: true }
        },
        status: {
            type: 'number',
            defaultsTo: 1,
            columnType: 'tinyint unsigned'
        },
        expiredAt: {
            type: "ref",
            required: true,
            columnName: "expired_at",
            columnType: "datetime",
            autoMigrations: { index: true }
        },
        createdAt: {
            type: "ref",
            required: true,
            columnName: "created_at",
            columnType: "datetime",
            autoMigrations: { index: true }
        },
        updatedAt: {
            type: "ref",
            required: true,
            columnName: "updated_at",
            columnType: "datetime",
            autoMigrations: { index: true }
        },
    },

    customToJSON: function() {
        return _.omit(this, ['createdAt', 'updatedAt'])
    }
}