module Api
  class EntriesController < ApplicationController
    before_action :set_entry, only: [:show, :edit, :update, :destroy]

    # GET /entries
    # GET /entries.json
    def index
      @entries = Entry.all
      respond_to do |format|
        format.html
        format.json { render json: @entries }
      end
    end

    # GET /entries/1
    # GET /entries/1.json
    def show
      respond_to do |format|
        format.html
        format.json { render json: @entry }
      end
    end

    # GET /entries/new
    def new
      @entry = Entry.new
    end

    # GET /entries/1/edit
    def edit
    end

    # POST /entries
    # POST /entries.json
    def create
      @entry = Entry.new(entry_params)

      respond_to do |format|
        if @entry.save
          EntryMailer.new_record_notification(@entry).deliver_later
          format.json { render json: @entry }
        else
          format.json { render json: @entry.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /entries/1
    # PATCH/PUT /entries/1.json
    def update
      respond_to do |format|
        if @entry.update(entry_params)
          format.json { render :show, status: :ok, location: @entry }
        else
          format.json { render json: @entry.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /entries/1
    # DELETE /entries/1.json
    def destroy
      @entry.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_entry
      @entry = Entry.find(params[:id])
    end

    # Never trust parameters from the scary internet.
    def entry_params
      params.require(:entry).permit(:name, :phone, :email)
    end
  end
end
