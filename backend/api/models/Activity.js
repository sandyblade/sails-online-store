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
    
    tableName: 'activities',

    attributes: {
        id  : {
            type: 'number',
            columnType: 'bigint unsigned',
            autoIncrement: true
        },
        user: {
            model: 'user'
        },
        event: {
            type: 'string',
            columnType: 'varchar(180)',
            autoMigrations: { index: true }
        },
        subject: {
            type: 'string',
            columnType: 'varchar(180)',
            autoMigrations: { index: true }
        },
        description: {
            type: 'string',
            columnType: 'varchar(255)',
            autoMigrations: { index: true }
        },
        status: {
            type: 'number',
            defaultsTo: 1,
            columnType: 'tinyint unsigned'
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