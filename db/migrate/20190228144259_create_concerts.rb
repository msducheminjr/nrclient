#---
# Excerpted from "Modern Front-End Development for Rails",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/nrclient for more book information.
#---
=begin
# BEGIN UGLY TEMPORARY MONKEY PATCH
module ActiveRecord
  module ConnectionAdapters
    module PostgreSQL
      module ColumnMethods # :nodoc:
        # Enables `t.enum :my_field, enum_name: :my_enum_name` on migrations
        def enum(name, **options)
          column(name, options.delete(:enum_name), options.except(:enum_name))
        end
      end
    end
  end
end
# END UGLY TEMPORARY MONKEY PATCH
=end

class CreateConcerts < ActiveRecord::Migration[6.0]
  def change

    create_enum :enum_ilk, %w[concert meet_n_greet battle]
    create_enum :enum_access, %w[general members vips]

    create_table :concerts do |t|
      t.string :name
      t.text :description
      t.datetime :start_time
      t.references :venue, foreign_key: true
      t.text :genre_tags
      t.enum :ilk, enum_name: :enum_ilk
      t.enum :access, enum_name: :enum_access

      t.timestamps
    end
  end
end
