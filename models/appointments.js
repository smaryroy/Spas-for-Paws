module.exports = function(sequelize, DataTypes) {
  const Appointments = sequelize.define(
    "Appointments",
    {
      appointment_time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      user_id: {
        type: DataTypes.INT,
        allowNull: false,
        len: [1]
      },
      service_id: {
        type: DataTypes.INT,
        allowNull: false,
        len: [1]
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1, 255]
      }
    },
    {
      freezeTableName: true,
      underscored: true
    }
  );

  // Association to with the appointment table
  Appointments.associate = function(models) {
    // We're saying that an Appointments should belong to an User
    // An Appointments can't be created without an User due to the foreign key constraint
    Appointments.hasMany(models.services);
    Appointments.hasMany(models.user);
  };

  return Appointments;
};
