exports.up = (knex, Promise) => {
  return knex.schema.createTable('hut', table => {
    table.increments('id').primary();
    table.string('HutName');
    table.integer('Elevation');
    table.integer('Trailhead_Elevation');
    table.integer('Elevation_Gain_From_Trailhead');
    table.specificType('Location', 'text[]');
    table.decimal('Distance_From_Trailhead');
    table.decimal('Distance_From_Nearest_Hut');
    table.decimal('Estimated_Time_In');
    table.decimal('Estimated_Time_Out');
    table.string('Contact_Number');
    table.text('Description');
    table.string('Booking_Url');
    table.decimal('Cost_Per_Person');
    table.integer('Summer_Capacity');
    table.integer('Winter_Capacity');
    table.specificType('Seasons_Open', 'text[]');
    table.integer('Minimum_No_of_Spaces');
    table.boolean('Single_Party_Bookings_Only');
    table.boolean('Multiple_Groups_Can_Book');
    table.boolean('Dogs_Allowed');
    table.boolean('Gear_Delivery');
    table.boolean('WINTER_Water_Snowmelt');
    table.boolean('WINTER_Water_Cistern_non_potable');
    table.boolean('WINTER_Water_Running_water_potable');
    table.boolean('WINTER_Water_Spring_stream_lake_non_potable');
    table.text('Suggested_SUMMER_Vehicle_Access');
    table.boolean('SUMMER_Parking_Available_On_site');
    table.boolean('Summer_Gear_Carts_at_Parking');
    table.boolean('SUMMER_Outdoor_Fire_Ring');
    table.boolean('SUMMER_Water_Cistern_not_potable_on_site');
    table.boolean('SUMMER_Water_Running_potable_on_site');
    table.boolean('SUMMER_Water_None_bring_your_own_water');
    table.boolean(
      'SUMMER_Water_less_than_one_quarter_mi_to_Spring_stream_lake_non_potable'
    );
    table.boolean(
      'SUMMER_Water_greater_than_one_quarter_mi_to_Spring_stream_lake_non_potable'
    );
    table.boolean('FOOD_Guests_bring_prepare_their_own');
    table.boolean('REFRIGERATION');
    table.boolean('DISHES_POTS_PANS_UTENSILS_CLEANING_SUPPLIES');
    table.string('BURNERS');
    table.string('OVEN');
    table.string('GRILL');
    table.boolean('GUESTS_MAY_BRING_OWN_GRILL_Restrictions_may_apply');
    table.specificType('HEAT', 'text[]');
    table.boolean('OUTHOUSE_With_covered_walkway');
    table.boolean('OUTHOUSE_No_covered_walkway_walk_a_short_distance');
    table.boolean('INDOOR_COMPOSTING_TOILET');
    table.boolean('INDOOR_FLUSH_TOILET');
    table.boolean('TOILET_PAPER_PROVIDED');
    table.boolean('MATTRESSES_PROVIDED');
    table.boolean('PILLOWS_PROVIDED');
    table.boolean('SLEEPING_BAGS');
    table.boolean('GUESTS_CLEAN_HUT_OR_YURT_BEFORE_DEPARTURE');
    table.boolean('GUESTS_CARRY_OUT_THEIR_TRASH_Trashbags_provided');
    table.string('LIGHTING');
    table.boolean('SAUNA');
    table.boolean(' ELECTRICAL_OUTLETS_FOR_GUEST_USE');
    table.boolean('PROPERTY_IS_ADA_COMPLIANT');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('hut');
};
